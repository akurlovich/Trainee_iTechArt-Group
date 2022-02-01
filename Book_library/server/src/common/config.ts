import dotenv from 'dotenv';
import path from 'path';

const __dirname = path.resolve();
dotenv.config({
  path: path.join(__dirname, '../../.env')
});

export default {
  PORT: process.env['PORT'] || 4000,
  NODE_ENV: process.env['NODE_ENV'],
  SALT: process.env['SALT'] || 5,
  MONGO_CONNECTION_STRING: process.env['MONGO_CONNECTION_STRING'],
  JWT_SECRET_KEY: process.env['JWT_SECRET_KEY'],
  AUTH_MODE: process.env['AUTH_MODE'] === 'true',
  DB_CONNECT: process.env['DB_CONNECT'] || 'mongodb+srv://nodejsjwt:node12345@cluster0.0xqxk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
};
