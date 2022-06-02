import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { UserInputDTO } from "../model/user";

export class UserController {
  public createUser = async (req: Request, res: Response) => {
    try {
      const { email, name, password } = req.body;

      const input: UserInputDTO = {
        email,
        name,
        password,
      };
      const userBusiness = new UserBusiness();
      await userBusiness.create(input);
      res.status(201).send({ message: "Usuário criado!" });
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  };

  async getAllUsers(req: Request, res: Response): Promise<void> {
    try {
      const userBusiness = new UserBusiness();
      const users = await userBusiness.getAllUsers();

      res.status(200).send(users);
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  }
}