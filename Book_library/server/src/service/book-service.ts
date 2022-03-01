import { Schema } from "mongoose";
import ApiError from "../exceptions/api-error";
import bookModel from "../models/book-model";
import genreModel from "../models/genre-model";
import { IBook, IBookDTO } from "../types/IBook";
import genreService from "./genre-service";

class BookService {
  async addBook(book: IBook) {
    return await bookModel.create(book);
  };

  async getBookByID(id: string) {
    return await bookModel.findById(id);
  };
  
  async updateBookAmountByID(id: string, amount: number) {
    return await bookModel.findByIdAndUpdate({_id: id}, {amount: amount}, {new: true});
  };
  
  async getAllBooks() {
    const books = await bookModel.find();
    if (!books) {
      throw ApiError.NotFound('Books not found!', [''])
    };

    const booksDTO: IBookDTO[] = [];

    for (let i = 0; i < books.length; i++) {
      const genres: string[] = [];
      for (let j = 0; j < books[i]?.genre.length; j++) {
        let genre = await genreService.getGenreByID(books[i].genre[j].toString());
        genres.push(genre.value);
      };
      
      booksDTO.push({
        _id: books[i]._id,
        title: books[i].title,
        author: books[i].author,
        year: books[i].year,
        description: books[i].description,
        coverImage: books[i].coverImage,
        amount: books[i].amount,
        genre: [...genres]})
    };

    return booksDTO;
  };

}

export default new BookService();