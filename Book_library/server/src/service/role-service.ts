import roleModel from "../models/role-model";
import { IRole } from "../types/IRole";

class RoleService {
  async addRole(role: IRole) {
    const newRole = await roleModel.create(role);
    return newRole;
  };

  async getRole(value: string) {
    return await roleModel.findOne({value});
  };

  async getRoleByID(id: string) {
    const role = await roleModel.findById(id);
    return role;
  };

  async getAllRoles() {
    const roles = await roleModel.find();
    return roles;
  };
};

export default new RoleService();