import { Router, Response, Request } from 'express';
import User from '../schemas/User';
import { IUser } from '../types/modelsType';

const router = Router();

router.post('/', async (req: Request, res: Response) => {
  try {
    const newUser = new User({
      email: req.body.email,
      password: req.body.password,
    });
    const user: IUser = await newUser.save();
    // const user: IUser = await newUser.create();
    console.log(user.email)
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error)
  }
});

export default router;