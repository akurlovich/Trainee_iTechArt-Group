import { Schema, model } from "mongoose";
import { IUser } from "../types/IUser";

const UserSchema: Schema = new Schema<IUser>({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  profileImage: {
    type: String,
    default: '',
  },
  moderator : {
    type: Boolean,
    default: false,
  },
  booksID: [{
    type: Schema.Types.ObjectId,
    default: [],
  }]
},
{ timestamps: true },
);

export default model<IUser>('User', UserSchema);