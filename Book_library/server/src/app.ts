import express from 'express';
import { model, Schema, Model, Document, connect } from 'mongoose';

const app = express();

app.use(express.json());


// app.use('/', (req, res, next) => {
//   if (req.originalUrl === '/') {
//     res.send('Service is running!');
//     return;
//   }
//   next();
// });

interface IBook extends Document {
  title: string;
  author: string;
  year: string;
}

const BookSchema: Schema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  year: { type: String, required: true }
});

const Book: Model<IBook> = model('User', BookSchema);


async function main() {
  connect('mongodb+srv://node12345:node12345@cluster0.qfiok.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
    // useCreateIndex: tr
  }, 
  () => console.log('Connect to DB')
  );
  // const book: IBook = await Book.create({
  //   title: 'Harry Potter',
  //   author: 'Bill',
  //   year: '2001'
  // });

  // console.log('Done', book.title);
  const books: Array<IBook> = await Book.find();
  console.log('Show books', books);
};

main().catch(err => console.log(err));




export default app;
