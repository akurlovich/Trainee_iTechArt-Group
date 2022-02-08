import { Schema, model } from "mongoose";
import { IIssued } from "../types/IIssued";

const IssuedSchema: Schema = new Schema<IIssued>({
  userID: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  bookID: {
    type: Schema.Types.ObjectId,
    ref: 'Book',
  },
}, { timestamps: true },
);

export default model<IIssued>('Issued', IssuedSchema);