import issuedModel from "../models/issued-model";
import { IIssued } from "../types/IIssued";

class IssuedService {
  async addIssued(issued: IIssued) {
    return await issuedModel.create(issued);
  };

  async getAllIssuedsBookID(bookID: string) {
    return await issuedModel.find({bookID});
  };

  async getAllIssuedsUserID(userID: string) {
    return await issuedModel.find({userID});
  };

  async getIssuedByID(id: string) {
    return await issuedModel.findById(id);
  };

  async getAllIssueds() {
    return await issuedModel.find();
  };

  async deleteIssued(id: string) {
    return await issuedModel.findByIdAndDelete(id);
  };
};

export default new IssuedService();