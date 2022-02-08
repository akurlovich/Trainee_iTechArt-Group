import { Schema, model } from "mongoose";
import { IBooked } from "../types/IBooked";

const BookedSchema: Schema = new Schema<IBooked>({
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

export default model<IBooked>('Booked', BookedSchema);