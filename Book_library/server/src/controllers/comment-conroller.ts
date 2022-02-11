import { NextFunction, Request, Response } from "express";
import commentService from "../service/comment-service";

class CommentController {
  async addComment(req: Request, res: Response, next: NextFunction) {
    try {
      const newComment = await commentService.addComment(req.body);
      return res.json(newComment);
    } catch (error) {
      console.log(error);
      next(error);
    }
  };

  //! возможно не нужен!!!!!!!!!!!!!!! подумать как получить ответ либо по id юзера или id книги

  async getComment(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.body;
      const comment = await commentService.getComment(id);
      return res.json(comment);
    } catch (error) {
      console.log(error);
      next(error);
    }
  };

  async getCommentByID(req: Request<{ id: string }>, res: Response, next: NextFunction) {
    try {
      const comment = await commentService.getCommentByID(req.params.id);
      return res.json(comment);
    } catch (error) {
      console.log(error);
      next(error);
    }
  };

  async getAllComments(req: Request, res: Response, next: NextFunction) {
    try {
      const comment = await commentService.getAllComments();
      return res.json(comment);
    } catch (error) {
      console.log(error);
      next(error);
    }
  };
};

export default new CommentController;