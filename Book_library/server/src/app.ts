import express from 'express';
// import config from './common/config';
import authRouter from './routes/auth';
import bookRouter from './routes/books';
import mongoose from 'mongoose';

const app = express();

app.use(express.json());

mongoose
  .connect('mongodb+srv://ellibrary:ellibrary@cluster0.cm82w.mongodb.net/eLibrary?retryWrites=true&w=majority', {})
  .then(() => console.log('Connected to DB'))
  .catch((err) => console.log(err));

app.use('/api/user', authRouter);
app.use('/api/books', bookRouter);

export default app;
