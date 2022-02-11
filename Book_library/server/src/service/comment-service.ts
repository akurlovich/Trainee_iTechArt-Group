import commentModel from "../models/comment-model";
import { IComment } from "../types/IComment";

class CommentService {
  async addComment(comment: IComment) {
    const newBooked = await commentModel.create(comment);
    return newBooked;
  };

  async getComment(value: string) {
    const comment = await commentModel.findOne({value});
    return comment;
  };

  async getCommentByID(id: string) {
    const comment = await commentModel.findById(id);
    return comment;
  };

  async getAllComments() {
    const comments = await commentModel.find();
    return comments;
  };
};

export default new CommentService();