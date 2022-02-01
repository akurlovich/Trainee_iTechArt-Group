import dotenv from 'dotenv';
import path from 'path';

const __dirname = path.resolve();
dotenv.config({
  path: path.join(__dirname, '../../.env')
});

export default {
  PORT: process.env['PORT'] || 4000,
  API_URL: process.env['API_URL'] || 'http://localhost:',
  NODE_ENV: process.env['NODE_ENV'],
  SALT: process.env['SALT'] || 5,
  JWT_ACCESS_SECRET_KEY: process.env['JWT_ACCESS_SECRET_KEY'] || 'access-secret-key',
  JWT_REFRESH_SECRET_KEY: process.env['JWT_REFRESH_SECRET_KEY'] || 'refresh-secret-key',
  AUTH_MODE: process.env['AUTH_MODE'] === 'true',
  DB_CONNECT: process.env['DB_CONNECT'] || 'mongodb+srv://ellibrary:ellibrary@cluster0.cm82w.mongodb.net/eLibrary?retryWrites=true&w=majority'
};
