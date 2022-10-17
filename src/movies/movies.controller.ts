import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';

@Controller('movies')
export class MoviesController {
  @Get()
  getAll() {
    return 'Return all movies';
  }

  @Get('search')
  search(@Query('year') searchingYear: string) {
    return `We are searching for a movie made after: ${searchingYear}`;
  }

  @Get(':id')
  getOne(@Param('id') movieId: number) {
    return `Return a movie with the id : ${movieId}`;
  }

  @Post()
  create(@Body() movieData) {
    return movieData;
  }

  @Delete(':id')
  remove(@Param('id') movieId: number) {
    return `Delete a movie with the id : ${movieId}`;
  }

  @Patch(':id')
  patch(@Param('id') movieId: number, @Body() updateData) {
    return {
      updatedMovie: movieId,
      ...updateData,
    };
  }
}
