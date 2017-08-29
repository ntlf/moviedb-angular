import { TestBed, inject } from '@angular/core/testing';
import { Response, ResponseOptions, Http, ConnectionBackend, BaseRequestOptions, RequestOptions } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';

import { MovieApiService } from './movie-api.service';
import { MovieMock } from '../mocks/movie.mock';
import { MoviesMock } from '../mocks/movies.mock';
import { MovieWikiMock } from '../mocks/movie-wiki.mock';
import { MovieDetailMock } from '../mocks/movie-detail.mock';

describe('MovieApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        MovieApiService,
        { provide: RequestOptions, useClass: BaseRequestOptions },
        { provide: ConnectionBackend, useClass: MockBackend },
        Http
      ]
    });
  });


  it('should be created', inject([MovieApiService], (service: MovieApiService) => {
    expect(service).toBeTruthy();
  }));


  it('should return an Promise<Array<Movie>>',
    inject([MovieApiService, ConnectionBackend], (service: MovieApiService, mockBackend: MockBackend) => {
      const response = new Response(new ResponseOptions({ body: JSON.stringify(MoviesMock) }));

      mockBackend.connections.subscribe((connection: MockConnection) => {
        connection.mockRespond(response);
      });

      service.getMovies('testing').then(movies => {
        for (let i = 0; i < movies.length; i++) {
          expect(movies[i].id).toBe(MoviesMock.results[i].id);
        }
      });
    }));


  it('should return a Movie',
    inject([MovieApiService, ConnectionBackend], (service: MovieApiService, mockBackend: MockBackend) => {
      const responses = {
        'wiki': new Response(new ResponseOptions({ body: JSON.stringify(MovieWikiMock) })),
        'tmdb': new Response(new ResponseOptions({ body: JSON.stringify(MovieDetailMock) }))
      };

      mockBackend.connections.subscribe((connection: MockConnection) => {
        const response = responses[connection.request.url.indexOf('wiki') !== -1 ? 'wiki' : 'tmdb'];
        connection.mockRespond(response);
      });

      service.getMovieDetails(MovieMock).then(movie => {
        expect(movie.wikiId).toBe(MovieWikiMock.query.pages[1].pageid);
        expect(movie.imdbId).toBe(MovieDetailMock.imdb_id);
      });
    }));
});
