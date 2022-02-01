import { IUser } from "../types/IUser";

export default class UserDto {
  email: string;
  id: string;

  constructor(model: IUser) {
    this.email = model.email;
    this.id = model._id;
  }
}