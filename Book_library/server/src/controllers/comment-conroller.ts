import { NextFunction, Request, Response } from "express";
import commentService from "../service/comment-service";

class CommentController {
  async addComment(req: Request, res: Response, next: NextFunction) {
    try {
      console.log(req.body)
      const newComment = await commentService.addComment(req.body);
      console.log(newComment)
      return res.json(newComment);
    } catch (error) {
      console.log(error);
      next(error);
    }
  };

  async getAllCommentsBookID(req: Request<{ id: string }>, res: Response, next: NextFunction) {
    try {
      const comment = await commentService.getAllCommentsBookID(req.params.id);
      return res.json(comment);
    } catch (error) {
      console.log(error);
      next(error);
    }
  };

  async getAllCommentsUserID(req: Request<{ id: string }>, res: Response, next: NextFunction) {
    try {
      const comment = await commentService.getAllCommentsUserID(req.params.id);
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

  async updateCommetByModerator(req: Request, res: Response, next: NextFunction) {
    try {
      const { id, comment } = req.body;
      const updateComment = await commentService.updateCommetByModerator(id, comment);
      return res.json(updateComment);
    } catch (error) {
      console.log(error);
      next(error);
    }
  };

  async deleteComment(req: Request<{ id: string }>, res: Response, next: NextFunction) {
    try {
      const comment = await commentService.deleteComment(req.params.id);
      return res.json(comment);
    } catch (error) {
      console.log(error);
      next(error);
    }
  };
};

export default new CommentController;