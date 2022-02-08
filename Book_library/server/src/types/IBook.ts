import { Binary } from "mongodb";
import { Document, Schema } from "mongoose";

export interface IBook extends Document {
  title: string,
  author: string,
  year: number,
  genre: Array<Schema.Types.ObjectId>,
  description: string,
  coverImage: string | Binary,
  amount: number,
};