import { Document, Schema } from "mongoose";

export interface IUser extends Document {
  email: string,
  password: string,
  profileImage: string,
  moderator: boolean,
  booksBookingID: Array<Schema.Types.ObjectId>,
  booksComments: Array<{
    bookID: Array<Schema.Types.ObjectId>,
    comments: string[],
  }>
}