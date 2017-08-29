import { Component } from '@angular/core';

import { MovieApiService } from './providers/movie-api.service';
import { Movie } from './models/movie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  movies: Movie[];
  selectedMovie: Movie;

  isLoadingMovies: boolean;
  isLoadingDetails: boolean;

  constructor(private movieApiService: MovieApiService) {
    this.isLoadingMovies = false;
    this.isLoadingDetails = false;
  }

  searchMovies(query: string) {
    this.isLoadingMovies = true;

    this.movieApiService.getMovies(query).then(data => {
      this.movies = data;
      this.isLoadingMovies = false;
    }).catch(error => {
      this.isLoadingMovies = false;
      console.log(error)
    });
  }

  getMovieDetails(movie: Movie) {
    this.isLoadingDetails = true;

    this.movieApiService.getMovieDetails(movie).then(data => {
      this.selectedMovie = data
      this.isLoadingDetails = false;
    }).catch(error => {
      this.isLoadingDetails = false;
      console.log(error)
    });
  }
}
