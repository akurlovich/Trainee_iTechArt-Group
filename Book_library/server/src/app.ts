import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import expressWS from 'express-ws';
import router from './router/index';
import errorMiddleware from './middlewares/error-middleware';

const appBase = express();

const wsInstance = expressWS(appBase);
const { app } = wsInstance;

app.use(express.json());
app.use(cookieParser());
app.use(cors({
  credentials: true,
  origin: 'http://localhost:3000',
}));
app.use('/api', router);
app.use(errorMiddleware);

app.ws('/', (ws, req) => {
  console.log('WS connect')
});


mongoose
  .connect('mongodb+srv://ellibrary:ellibrary@cluster0.cm82w.mongodb.net/eLibrary?retryWrites=true&w=majority', {})
  .then(() => console.log('Connected to DB'))
  .catch((err) => console.log(err));


export default app;
