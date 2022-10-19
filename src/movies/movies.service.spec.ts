import { NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { MoviesService } from './movies.service';

describe('MoviesService', () => {
  let service: MoviesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MoviesService],
    }).compile();

    service = module.get<MoviesService>(MoviesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getAll', () => {
    it('should return an array', () => {
      const result = service.getAll();
      expect(result).toBeInstanceOf(Array);
    });
  });

  describe('getOne', () => {
    it('should return a movie', () => {
      service.create({
        title: 'Top Gun',
        genres: ['action', 'drama'],
        year: 2022,
      });
      const movie = service.getOne(1);
      expect(movie).toBeDefined();
      expect(movie.id).toEqual(1);
    });

    it('should throw 404 error', () => {
      try {
        service.getOne(2);
      } catch (e) {
        expect(e).toBeInstanceOf(NotFoundException);
      }
    });
  });

  describe('deleteOne', () => {
    it('delete a movie', () => {
      service.create({
        title: 'Top Gun',
        genres: ['action', 'drama'],
        year: 2022,
      });
      service.deleteOne(1);
      const movies = service.getAll();
      expect(movies).toHaveLength(0);
    });
    it('should return 404 error', () => {
      try {
        service.deleteOne(2);
      } catch (e) {
        expect(e).toBeInstanceOf(NotFoundException);
      }
    });
  });

  describe('create', () => {
    it('should be a movie', () => {
      service.create({
        title: 'Top Gun',
        genres: ['action', 'drama'],
        year: 2022,
      });
      const movies = service.getAll();
      expect(movies).toHaveLength(1);
    });
  });

  describe('update', () => {
    it('should update a movie', () => {
      service.create({
        title: 'Top Gun',
        genres: ['action', 'drama'],
        year: 2022,
      });
      service.update(1, { year: 2023 });
      const movie = service.getOne(1);
      expect(movie.year).toEqual(2023);
    });

    it('should throw 404 error', () => {
      try {
        service.update(2, {});
      } catch (e) {
        expect(e).toBeInstanceOf(NotFoundException);
      }
    });
  });
});
