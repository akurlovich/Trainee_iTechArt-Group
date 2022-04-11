import { NextFunction, Request, Response } from "express";
import bookService from "../service/book-service";
import genreService from "../service/genre-service";

class BookController {
  async addBook(req: Request, res: Response, next: NextFunction) {
    try {
      const { genre } = req.body;
      const getGenre = await genreService.getGenre(genre);
      if (!getGenre) {
        const newGenre = await genreService.addGenre(genre);
        const bookData = await bookService.addBook({...req.body, genre: newGenre._id});
        return res.json(bookData)
      }
      const bookData = await bookService.addBook({...req.body, genre: getGenre?._id});
      return res.json(bookData)
    } catch (error) {
      next(error);
    }
  };

  async getBookByID(req: Request<{ id: string }>, res: Response, next: NextFunction) {
    try {
      const book = await bookService.getBookByID(req.params.id);
      return res.json(book)
    } catch (error) {
      next(error);
    }
  };

  async updateBookAmountByID(req: Request, res: Response, next: NextFunction) {
    try {
      const { id, amount } = req.body;
      const book = await bookService.updateBookAmountByID(id, amount);
      return res.json(book)
    } catch (error) {
      next(error);
    }
  };

  async getAllBooks(req: Request, res: Response, next: NextFunction) {
    try {
      const books = await bookService.getAllBooks();
      return res.json(books)
    } catch (error) {
      next(error);
    }
  };
}

export default new BookController();