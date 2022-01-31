import { Document, Schema } from "mongoose";

export interface IBook extends Document {
  title: string,
  author: string,
  year: string,
  genre: string,
  description: string,
  coverImage: string,
  comments: string[],
  amount: number,
  usersID: Array<Schema.Types.ObjectId>,
};