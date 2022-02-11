import bookedModel from "../models/booked-model";
import { IBooked } from "../types/IBooked";

class BookedService {
  async addBooked(booked: IBooked) {
    const newBooked = await bookedModel.create(booked);
    return newBooked;
  };

  async getBooked(value: string) {
    const booked = await bookedModel.findOne({value});
    return booked;
  };

  async getBookedByID(id: string) {
    const booked = await bookedModel.findById(id);
    return booked;
  };

  async getAllBookeds() {
    const bookeds = await bookedModel.find();
    return bookeds;
  };
};

export default new BookedService();