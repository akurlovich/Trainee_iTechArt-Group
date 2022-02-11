import { NextFunction, Request, Response } from "express";
import issuedService from "../service/issued-service";

class IssuedController {
  async addIssued(req: Request, res: Response, next: NextFunction) {
    try {
      const newIssued = await issuedService.addIssued(req.body);
      return res.json(newIssued);
    } catch (error) {
      console.log(error);
      next(error);
    }
  };

  //! возможно не нужен!!!!!!!!!!!!!!! подумать как получить ответ либо по id юзера или id книги

  async getIssued(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.body;
      const issued = await issuedService.getIssued(id);
      return res.json(issued);
    } catch (error) {
      console.log(error);
      next(error);
    }
  };

  async getIssuedByID(req: Request<{ id: string }>, res: Response, next: NextFunction) {
    try {
      const issued = await issuedService.getIssuedByID(req.params.id);
      return res.json(issued);
    } catch (error) {
      console.log(error);
      next(error);
    }
  };

  async getAllIssueds(req: Request, res: Response, next: NextFunction) {
    try {
      const issueds = await issuedService.getAllIssueds();
      return res.json(issueds);
    } catch (error) {
      console.log(error);
      next(error);
    }
  };
};

export default new IssuedController;