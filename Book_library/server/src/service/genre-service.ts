import genreModel from "../models/genre-model";
import { IGenre } from "../types/IGenre";

class GenreService {
  async addGenre(genre: IGenre) {
    const newGenre = await genreModel.create(genre);
    return newGenre;
  };

  async getGenre(value: string) {
    const genre = await genreModel.findOne({value});
    return genre;
  };

  async getGenreByID(id: string) {
    const genre = await genreModel.findById(id);
    return genre;
  };

  async getAllGenres() {
    const genres = await genreModel.find();
    return genres;
  };
};

export default new GenreService();