import { Schema, model } from "mongoose";
import { IUser } from "../types/modelsType";

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
  role : {
    type: String,
    default: 'customer'
  },
  booksID: [{
    type: Schema.Types.ObjectId,
    default: [],
  }]
},
{ timestamps: true },
);

export default model<IUser>('User', UserSchema);