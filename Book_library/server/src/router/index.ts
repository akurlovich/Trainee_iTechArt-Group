import { Router } from 'express';
import userController from '../controllers/user-controller';
import { body } from 'express-validator';
import authMiddleware from '../middlewares/auth-middleware';
import bookController from '../controllers/book-controller';
import genreController from '../controllers/genre-controller';
import roleController from '../controllers/role-controller';
import bookedController from '../controllers/booked-controller';

const router = Router();

router.post('/registration',
  body('email').isEmail(),
  body('password').isLength({min: 6, max: 32}),  
  userController.registration);
router.post('/login', userController.login);
router.post('/logout', userController.logout);
router.get('/refresh', userController.refresh);
router.get('/users', authMiddleware, userController.getUsers);
// router.get('/users', userController.getUsers);

router.get('/books', bookController.getAllBooks);
router.get('/books/:id', bookController.getBookByID);
router.post('/books', bookController.addBook);

router.get('/genre', genreController.getGenre);
router.get('/genre/:id', genreController.getGenreByID);
router.get('/genres', genreController.getAllGenres);
router.post('/genres', genreController.addGenre);

router.get('/role', roleController.getRole);
router.get('/role/:id', roleController.getRoleByID);
router.get('/roles', roleController.getAllRoles);
router.post('/roles', roleController.addRole);

router.get('/booked', bookedController.getBooked);
router.get('/booked/:id', bookedController.getBookedByID);
router.get('/bookeds', bookedController.getAllBookeds);
router.post('/bookeds', bookedController.addBooked);

export default router;