import { Injectable, NotFoundException } from '@nestjs/common';
import { Movie } from './entities/movie.entity';

@Injectable()
export class MoviesService {
  private movies: Movie[] = [];

  getAll(): Movie[] {
    return this.movies;
  }

  getOne(id: number): Movie {
    const movie = this.movies.find((movie) => movie.id === +id);
    if (!movie) throw new NotFoundException(`Movie not found: ${id}`);
    return movie;
  }

  create(movieData: Movie) {
    this.movies.push({
      id: this.movies.length + 1,
      ...movieData,
    });
  }

  deleteOne(id: number): boolean {
    this.getOne(id);
    this.movies = this.movies.filter((movie) => movie.id !== +id);
    return true;
  }

  update(id: number, movieData: Movie) {
    this.getOne(id);
    this.movies = this.movies.map((movie) => {
      if (movie.id === +id) return { ...movie, ...movieData };
      return movie.id === id ? { ...movie, ...updateData } : movie;
    });
  }
}
