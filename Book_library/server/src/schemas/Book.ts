import { model, Schema } from "mongoose";
import { IBook } from "../types/IBook";

const BookSchema: Schema = new Schema<IBook>({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  coverImage: {
    type: String,
    required: true,
  },
  comments: [{
    type: String,
    default: ''
  }],
  amount: {
    type: Number,
    required: true,
  },
  usersID: [{
    type: Schema.Types.ObjectId,
    default: []
  }],
},
{ timestamps: true },
);

export default model<IBook>('Book', BookSchema);