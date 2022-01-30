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
  usersID: string[],
};
export interface IUser extends Document {
  email: string,
  password: string,
  profileImage: string,
  role: string,
  booksID: Array<Schema.Types.ObjectId>,
}