import { Schema } from "mongoose";
import { IUser } from "../types/IUser";

export default class UserDto {
  email: string;
  id: string;
  roleID: Schema.Types.ObjectId[];

  constructor(model: IUser) {
    this.email = model.email;
    this.id = model._id;
    this.roleID = model.role;
  }
}