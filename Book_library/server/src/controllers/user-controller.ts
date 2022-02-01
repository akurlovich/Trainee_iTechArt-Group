import {  NextFunction, Request, Response } from "express";
import userService from "../service/user-service";
import { validationResult } from 'express-validator';
import ApiError from "../exceptions/api-error";

class UserController {
  async registration(req: Request, res: Response, next: NextFunction) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return next(ApiError.BadRequest('Bad validation!', (errors.array() as unknown as string[])))
      }
      const { email, password } = req.body;
      const userData = await userService.registration(email, password);
      res.cookie('refreshToken', userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true})
      return res.json(userData)
    } catch (error) {
      next(error);
    }
  };
  async login(req: Request, res: Response, next: NextFunction) {
    try {
      const { email, password } = req.body;
      const userData = await userService.login(email, password);
      res.cookie('refreshToken', userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true})
      return res.json(userData)
    } catch (error) {
      next(error);
    }
  };
  async logout(req: Request, res: Response, next: NextFunction) {
    try {
      
    } catch (error) {
      next(error);
    }
  };
  async refresh(req: Request, res: Response, next: NextFunction) {
    try {
      
    } catch (error) {
      next(error);
    }
  };
  async getUsers(req: Request, res: Response, next: NextFunction) {
    try {
      res.json(['123'])
    } catch (error) {
      next(error);
    }
  };

};

export default new UserController();