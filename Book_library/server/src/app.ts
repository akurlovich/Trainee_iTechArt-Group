import express from 'express';
// import { connect, model, Model, Schema, Document } from 'mongoose';
// import { MongoClient } from 'mongodb';
// import { connect, model, Model, Schema } from 'mongoose';
// import config from './common/config';
import authRouter from './routes/auth';
// import User from './schemas/User';
// import { IUser } from './types/modelsType';
// import { model, Schema, Model, Document, connect } from 'mongoose';
import mongoose from 'mongoose';

const app = express();

app.use(express.json());





mongoose
  .connect('mongodb+srv://ellibrary:ellibrary@cluster0.cm82w.mongodb.net/eLibrary?retryWrites=true&w=majority', {})
  .then(() => console.log('Connected to DB'))
  .catch((err) => console.log(err));


// app.use('/', (req, res, next) => {
//   if (req.originalUrl === '/') {
//     res.send('Service is running!');
//     return;
//   }
//   next();
// });

// interface IBook extends Document {
//   title: string;
//   author: string;
//   year: string;
// }

// const BookSchema: mongoose.Schema = new mongoose.Schema({
//   title: { type: String, required: true },
//   author: { type: String, required: true },
//   year: { type: String, required: true }
// });

// const Book: mongoose.Model<IBook> = mongoose.model('Book', BookSchema);

// async function qqqq() {
//   try {
//     const newUser: IBook = await Book.create({
//       title: "6666666666",
//       author: "potter",
//       year: '2001'
//       })
//     console.log(newUser);
    
//   } catch (error) {
//     console.log('first', error)
    
//   } 
// }
// qqqq().catch(err => console.log(err));

// async function main() {
//   connect(config.DB_CONNECT, {
//     // useNewUrlParser: true,
//     // useUnifiedTopology: true,
// //     // useCreateIndex: tr
//   }, 
//   () => console.log('Connect to DB')
//   );

//   // const newUser: IUser = await User.create({
//   //   email: '111@111.11',
//   //   password: 'passw1',
//   // });
//   // console.log('first', newUser.email);
// try {
//   const newUser: IBook = await Book.create({
//     title: "0000000",
//     author: "potter",
//     year: '2001'
//     });
//     console.log(newUser);


  // const book = new Book({
  //   title: '2222222',
  //   author: 'Bill',
  //   year: '2001'
  // });

  // book.save().then(ress => console.log(ress)).catch(err => console.log(err));

  // console.log('Done', book.title);
  
// } catch (error) {
//   console.log(error);
// }
  // try {
  //   const books: Array<IBook> = await Book.find();
  //   console.log('Show books', books);
    
  // } catch (error) {
  //   console.log(error);
  // }
// };

// main().catch(err => console.log(err));

app.use('/register', authRouter)


export default app;
