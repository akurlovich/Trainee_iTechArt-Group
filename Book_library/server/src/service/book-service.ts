import { Schema } from "mongoose";
import ApiError from "../exceptions/api-error";
import bookModel from "../models/book-model";
import { IBook } from "../types/IBook";
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
    // return await bookModel.find();
    const books = await bookModel.find();
    if (!books) {
      throw ApiError.NotFound('Books not found!', [''])
    }

    for (let i = 0; i < books.length; i++) {
        for (let j = 0; j < books[i]?.genre.length; i++) {
          let genre = await genreService.getGenreByID(books[i].genre[j]);
          // books[i].genre[j] = genre.value;
        }

    }


    return books;
  };

}

export default new BookService();