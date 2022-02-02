import { Router, Response, Request } from 'express';
import User from '../schemas/User';
import { IUser } from '../types/IUser';
import bcrypt from 'bcrypt';

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
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(req.body.password, salt);
    const newUser = new User({
      email: req.body.email,
      password: hashedPass,
    });
    const user: IUser = await newUser.save();
    console.log(user.email)
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error)
  }
});

router.post('/login', async (req: Request, res: Response) => {
  try {
    const user = await User.findOne({email: req.body.email});
    if (!user) {
      return res.status(400).json('Wrong data!');
    }
    const validate = await bcrypt.compare(req.body.password, user.password);
    if (!validate) {
      return res.status(400).json('Wrong data!');
    }
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json(error)
  }
});

export default router;