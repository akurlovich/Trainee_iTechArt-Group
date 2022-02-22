import { IBookResponse } from "./IBookResponse";
import { IUser } from "./IUser";

export interface IUsersAndBookeds {
  user: IUser,
  userBooks: IBookResponse[],
}