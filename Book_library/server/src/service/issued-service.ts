import issuedModel from "../models/issued-model";
import { IIssued } from "../types/IIssued";

class IssuedService {
  async addIssued(issued: IIssued) {
    const newIssued = await issuedModel.create(issued);
    return newIssued;
  };

  async getIssued(value: string) {
    const issued = await issuedModel.findOne({value});
    return issued;
  };

  async getIssuedByID(id: string) {
    const issued = await issuedModel.findById(id);
    return issued;
  };

  async getAllIssueds() {
    const issueds = await issuedModel.find();
    return issueds;
  };
};

export default new IssuedService();