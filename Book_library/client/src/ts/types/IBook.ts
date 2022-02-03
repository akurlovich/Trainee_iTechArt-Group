import { Document, Schema } from "mongoose";

export interface IBook extends Document {
  title: string,
  author: string,
  year: string,
  genre: string,
  description: string,
  coverImage: string,
  amount: number,
  usersBookingID: Array<Schema.Types.ObjectId>,
  usersComments: Array<{
    userID: Array<Schema.Types.ObjectId>,
    comments: string[],
  }>
};