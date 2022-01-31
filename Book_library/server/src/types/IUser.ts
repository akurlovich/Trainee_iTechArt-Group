import { Document, Schema } from "mongoose";

export interface IUser extends Document {
  email: string,
  password: string,
  profileImage: string,
  moderator: boolean,
  booksID: Array<Schema.Types.ObjectId>,
}