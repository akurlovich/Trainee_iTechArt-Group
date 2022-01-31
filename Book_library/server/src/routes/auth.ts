import { Router, Response, Request } from 'express';
import User from '../schemas/User';
import { IUser } from '../types/IUser';

const router = Router();

router.get('/', async (_, res: Response) => {
  try {
    const users: IUser[] = await User.find();
    res.status(200).json(users);
    
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post('/register', async (req: Request, res: Response) => {
  try {
    const newUser = new User({
      email: req.body.email,
      password: req.body.password,
    });
    const user: IUser = await newUser.save();
    console.log(user.email)
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error)
  }
});

export default router;