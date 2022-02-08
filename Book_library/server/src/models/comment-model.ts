import { Schema, model } from "mongoose";
import { IComment } from "../types/IComment";

const CommentSchema: Schema = new Schema<IComment>({
  userID: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  bookID: {
    type: Schema.Types.ObjectId,
    ref: 'Book',
  },
  comment: {
    type: String,
    required: true,
  },
}, { timestamps: true },
);

export default model<IComment>('Comment', CommentSchema);