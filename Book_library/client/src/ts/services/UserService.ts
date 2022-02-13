import { AxiosResponse } from "axios";
import { IAuthResponse } from "../types/IAuthResponse";
import serverApi from '../http/index';
import { IUser } from "../types/IUser";

export default class UserService {
  static async fetchUsers(): Promise<AxiosResponse<IUser[]>> {
    return serverApi.get<IUser[]>('/users')
  }
}