import bookedModel from "../models/booked-model";
import { IBooked } from "../types/IBooked";

class BookedService {
  async addBooked(booked: IBooked) {
    return await bookedModel.create(booked);
  };

  async getAllBookedsBookID(bookID: string) {
    return await bookedModel.find({bookID});
  };

  async getAllBookedsUserID(userID: string) {
    return await bookedModel.find({userID});
  };

  async getBookedByID(id: string) {
    return await bookedModel.findById(id);
  };

  async getAllBookeds() {
    return await bookedModel.find();
  };

  async deleteBooked(id: string) {
    return await bookedModel.findByIdAndDelete(id);
  };
};

export default new BookedService();