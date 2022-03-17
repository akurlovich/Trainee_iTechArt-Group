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
const aWss = wsInstance.getWss();

app.use(express.json());
app.use(cookieParser());
app.use(cors({
  credentials: true,
  origin: 'http://localhost:3000',
}));
app.use('/api', router);
app.use(errorMiddleware);

interface IMSGProps {
  id: string,
  bookTitle: string,
  method: string,
}

app.ws('/', (ws, req) => {
  console.log('WS connect')
  // ws.send('CONNECTED');
  ws.on('message', (msg: string) => {
    // console.log(msg);
    const msg1: IMSGProps = JSON.parse(msg);
    // console.log(msg1.method);
    // aWss.clients.forEach(client => {
    //   ws.send('client');
    // })

    switch (msg1.method) {
      case 'connection': 
        connectionHandler(ws, msg1);
        break;
    
    }
  })
});

const connectionHandler = (ws: any, msg: IMSGProps) => {
  aWss.clients.forEach(client => {
    // if (client. = msg.id) 

      client.send(JSON.stringify(msg))
    
  })
}


mongoose
  .connect('mongodb+srv://ellibrary:ellibrary@cluster0.cm82w.mongodb.net/eLibrary?retryWrites=true&w=majority', {})
  .then(() => console.log('Connected to DB'))
  .catch((err) => console.log(err));


export default app;
