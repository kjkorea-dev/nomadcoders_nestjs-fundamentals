import { Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

@Controller('movies')
export class MoviesController {
  @Get()
  getAll() {
    return 'Return all movies';
  }

  @Get('/:id')
  getOne(@Param('id') movieId: number) {
    return `Return a movie with the id : ${movieId}`;
  }

  @Post()
  create() {
    return 'Create a movie';
  }

  @Delete('/:id')
  remove(@Param('id') movieId: number) {
    return `Delete a movie with the id : ${movieId}`;
  }

  @Patch('/:id')
  patch(@Param('id') movieId: number) {
    return `Patch a movie with the id : ${movieId}`;
  }
}
