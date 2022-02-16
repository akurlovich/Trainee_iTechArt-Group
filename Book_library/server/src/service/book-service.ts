import bookModel from "../models/book-model";
import { IBook } from "../types/IBook";

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
    return await bookModel.find();
  };

}

export default new BookService();