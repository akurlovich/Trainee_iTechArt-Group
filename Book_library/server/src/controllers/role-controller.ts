import { NextFunction, Request, Response } from "express";
import roleService from "../service/role-service";

class RoleController {
  async addRole(req: Request, res: Response, next: NextFunction) {
    try {
      const newRole = await roleService.addRole(req.body);
      return res.json(newRole);
    } catch (error) {
      console.log(error);
      next(error);
    }
  };

  async getRole(req: Request, res: Response, next: NextFunction) {
    try {
      const { value } = req.body;
      const role = await roleService.getRole(value);
      return res.json(role);
    } catch (error) {
      console.log(error);
      next(error);
    }
  };

  async getRoleByID(req: Request<{ id: string }>, res: Response, next: NextFunction) {
    try {
      const role = await roleService.getRoleByID(req.params.id);
      return res.json(role);
    } catch (error) {
      console.log(error);
      next(error);
    }
  };

  async getAllRoles(req: Request, res: Response, next: NextFunction) {
    try {
      const genres = await roleService.getAllRoles();
      return res.json(genres);
    } catch (error) {
      console.log(error);
      next(error);
    }
  };
};

export default new RoleController;