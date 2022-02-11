import { NextFunction, Request, Response } from "express";
import bookedService from "../service/booked-service";

class BookedController {
  async addBooked(req: Request, res: Response, next: NextFunction) {
    try {
      const newBooked = await bookedService.addBooked(req.body);
      return res.json(newBooked);
    } catch (error) {
      console.log(error);
      next(error);
    }
  };

  //! возможно не нужен!!!!!!!!!!!!!!! подумать как получить ответ либо по id юзера или id книги

  async getBooked(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.body;
      const booked = await bookedService.getBooked(id);
      return res.json(booked);
    } catch (error) {
      console.log(error);
      next(error);
    }
  };

  async getBookedByID(req: Request<{ id: string }>, res: Response, next: NextFunction) {
    try {
      const booked = await bookedService.getBookedByID(req.params.id);
      return res.json(booked);
    } catch (error) {
      console.log(error);
      next(error);
    }
  };

  async getAllBookeds(req: Request, res: Response, next: NextFunction) {
    try {
      const bookeds = await bookedService.getAllBookeds();
      return res.json(bookeds);
    } catch (error) {
      console.log(error);
      next(error);
    }
  };
};

export default new BookedController;