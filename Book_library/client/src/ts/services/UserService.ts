import { AxiosResponse } from "axios";
import { IAuthResponse } from "../types/IAuthResponse";
import serverApi from '../http/index';
import { IUser, IUserUpdateProfileImage } from "../types/IUser";

export default class UserService {
  static async fetchUsers(): Promise<AxiosResponse<IUser[]>> {
    return serverApi.get<IUser[]>('/users')
  };

  static async getUserByID(id: string): Promise<AxiosResponse<IUser>> {
    return serverApi.get<IUser>(`/users/${id}`)
  };

  static async updateUserProfileImage(newImage: IUserUpdateProfileImage): Promise<AxiosResponse<IUser>> {
    return serverApi.put<IUser>(`/users/profileImage`, newImage)
  };
}