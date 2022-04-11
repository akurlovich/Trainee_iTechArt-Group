import { NextFunction, Request, Response } from "express";
import genreService from "../service/genre-service";

class GenreController {
  async addGenre(req: Request, res: Response, next: NextFunction) {
    try {
      const newGenre = await genreService.addGenre(req.body);
      return res.json(newGenre);
    } catch (error) {
      next(error);
    }
  };

  async getGenre(req: Request, res: Response, next: NextFunction) {
    try {
      const { value } = req.body;
      const genre = await genreService.getGenre(value);
      return res.json(genre);
    } catch (error) {
      next(error);
    }
  };

  async getGenreByID(req: Request<{ id: string }>, res: Response, next: NextFunction) {
    try {
      const genre = await genreService.getGenreByID(req.params.id);
      return res.json(genre);
    } catch (error) {
      next(error);
    }
  };

  async getAllGenres(req: Request, res: Response, next: NextFunction) {
    try {
      const genres = await genreService.getAllGenres();
      return res.json(genres);
    } catch (error) {
      next(error);
    }
  };
};

export default new GenreController;