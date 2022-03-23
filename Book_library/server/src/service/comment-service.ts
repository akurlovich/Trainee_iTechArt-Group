import commentModel from "../models/comment-model";
import { IComment } from "../types/IComment";

class CommentService {
  async addComment(comment: IComment) {
    return await commentModel.create(comment);
  };

  async getAllCommentsBookID(bookID: string) {
    return await commentModel.find({bookID});
  };

  async getAllCommentsUserID(userID: string) {
    return await commentModel.find({userID});
  };

  async getCommentByID(id: string) {
    return await commentModel.findById(id);
  };

  async getAllComments() {
    return await commentModel.find();
  };

  async updateCommetByModerator(id: string, comment: string) {
    return await commentModel.findByIdAndUpdate({_id: id}, {comment: comment}, {new: true});
  };

  async deleteComment(id: string) {
    return await commentModel.findByIdAndDelete(id);
  };
};

export default new CommentService();