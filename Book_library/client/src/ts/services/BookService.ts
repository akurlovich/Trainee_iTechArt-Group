import { AxiosResponse } from "axios";
import serverApi from "../http";
import { IBook } from "../types/IBook";
import { IBookResponse } from "../types/IBookResponse";

export default class BookService {
  static async addBook(book: IBook): Promise<AxiosResponse<IBookResponse>> {
    return serverApi.post<IBookResponse>('/books', book);
  };

  static async getBooks(): Promise<AxiosResponse<IBookResponse[]>> {
    return serverApi.get<IBookResponse[]>('/books')
  };

  static async getBookByID(id: string): Promise<AxiosResponse<IBookResponse>> {
    return serverApi.get<IBookResponse>(`/books/${id}`);
  };
}