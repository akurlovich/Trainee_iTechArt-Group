import { Router, Response, Request } from 'express';
import Book from '../schemas/Book';
import { IBook } from '../types/IBook';

const router = Router();

router.get('/', async (_, res: Response) => {
  try {
    const books: IBook[] = await Book.find();
    res.status(200).json(books);
    
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post('/', async (req: Request, res: Response) => {
  try {
    const newBook = new Book({
      title: req.body.title,
      author: req.body.author,
      year: req.body.year,
    });
    const book: IBook = await newBook.save();
    // const user: IUser = await newUser.create();
    console.log(book.title)
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json(error)
  }
});

export default router;