import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/operator/map';

import { Movie } from '../models/movie';

@Injectable()
export class MovieApiService {
  constructor(private http: Http) { }

  public getMovies(query: String): Promise<Movie[]> {
    const paramsTMDb = new URLSearchParams();

    paramsTMDb.set('api_key', '59fce579ddc5abcc2eec6bada8fb6819');
    paramsTMDb.set('language', 'en-US');
    paramsTMDb.set('query', `${query}`);

    const url = 'https://api.themoviedb.org/3/search/movie';

    return new Promise<Movie[]>((resolve, reject) => {
      this.http.get(url, { params: paramsTMDb })
        .map(data => data.json())
        .subscribe(data => {
          const hits = new Array<Movie>();

          for (const hit of data.results) {
            hits.push({
              id: hit.id,
              title: hit.title,
              date: hit.release_date,
              imageUrl: hit.poster_path ? `https://image.tmdb.org/t/p/w500${hit.poster_path}` : null
            })
          }

          resolve(hits);
        }, error => {
          reject(error.json());
        });
    });
  }

  public getMovieDetails(movie: Movie): Promise<Movie> {
    const paramsWiki = new URLSearchParams();
    const paramsTMDb = new URLSearchParams();

    paramsWiki.set('action', 'query');
    paramsWiki.set('origin', '*');
    paramsWiki.set('prop', 'extracts');
    paramsWiki.set('exintro', '');
    paramsWiki.set('explaintext', '');
    paramsWiki.set('format', 'json');
    paramsWiki.set('titles', `${movie.title}`);

    paramsTMDb.set('api_key', '59fce579ddc5abcc2eec6bada8fb6819');

    const wikiUrl = 'https://en.wikipedia.org/w/api.php';
    const movieUrl = `https://api.themoviedb.org/3/movie/${movie.id}`;

    return new Promise<Movie>((resolve, reject) => {
      const wiki = this.http.get(wikiUrl, { params: paramsWiki }).map(data => data.json());
      const imdb = this.http.get(movieUrl, { params: paramsTMDb }).map(data => data.json());

      Observable.forkJoin([wiki, imdb]).subscribe(results => {
        const pageId = (Object.keys(results[0].query.pages))[0];

        movie.wikiId = results[0].query.pages[pageId].pageid;
        movie.wikiText = results[0].query.pages[pageId].extract;

        movie.imdbId = results[1].imdb_id;

        resolve(movie);
      }, error => {
        reject(error.json());
      });
    });
  }

}
