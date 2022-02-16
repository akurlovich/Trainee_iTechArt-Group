import { AxiosResponse } from "axios";
import serverApi from "../http";
import { IBooked } from "../types/IBooked";
import { IBookResponse } from "../types/IBookResponse";

export default class BookedService {
  static async addBooked(booked: IBooked): Promise<AxiosResponse<IBookResponse>> {
    return serverApi.post<IBookResponse>('/booked', booked);
  };

  static async getBookeds(): Promise<AxiosResponse<IBookResponse[]>> {
    return serverApi.get<IBookResponse[]>('/bookeds')
  };

  static async getAllBookedsByBookID(id: string): Promise<AxiosResponse<IBookResponse[]>> {
    return serverApi.get<IBookResponse[]>(`/booked/books/${id}`);
  };

  static async getAllBookedsByUserID(id: string): Promise<AxiosResponse<IBookResponse[]>> {
    return serverApi.get<IBookResponse[]>(`/booked/users/${id}`);
  };

  static async deleteBooked(id: string): Promise<AxiosResponse<IBookResponse>> {
    return serverApi.delete<IBookResponse>(`/booked/${id}`);
  };

}