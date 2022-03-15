import { NextFunction, Request, Response } from "express";
import bookedService from "../service/booked-service";
import schedule from 'node-schedule';
import mailService from "../service/mail-service";

class BookedController {
  async addBooked(req: Request, res: Response, next: NextFunction) {
    try {
      const newBooked = await bookedService.addBooked(req.body);
      // const date = new Date(Date.now() + 5000);

      // const job = schedule.scheduleJob(date, function() {
      //   console.log('The world is going to end today.');
      // });
      
      return res.json(newBooked);
    } catch (error) {
      console.log(error);
      next(error);
    }
  };

  async getAllBookedsBookID(req: Request<{ id: string}>, res: Response, next: NextFunction) {
    try {
      const booked = await bookedService.getAllBookedsBookID(req.params.id);
      return res.json(booked);
    } catch (error) {
      console.log(error);
      next(error);
    }
  };

  async getAllBookedsUserID(req: Request<{ id: string}>, res: Response, next: NextFunction) {
    try {
      const booked = await bookedService.getAllBookedsUserID(req.params.id);
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
      const date = new Date(Date.now() + 3000);

      // const fff = true;

      // const job = schedule.scheduleJob(date, function() {
      //   if (fff) {
      //     console.log('The world is going to end today.');
      //   } else {
      //     return;
      //   }
      // });
      // await mailService.sendNotificationToMail('iamtutwas@gmail.com', 'Hi ALL')
      return res.json(bookeds);
    } catch (error) {
      console.log(error);
      next(error);
    }
  };

  async deleteBooked(req: Request<{ id: string }>, res: Response, next: NextFunction) {
    try {
      const booked = await bookedService.deleteBooked(req.params.id);
      return res.json(booked);
    } catch (error) {
      console.log(error);
      next(error);
    }
  };
};

export default new BookedController;