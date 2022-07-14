import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { UserDataBase } from "../data/UserDatabase";
import { user } from "../types/user";

export class UserController {
  public createUser = async (req: Request, res: Response) => {
    try {
      const { name, password, email } = req.body;
      const input = {
        name,
        email,
        password,
      };

      const userBusiness = new UserBusiness();
      userBusiness.createUser(input);

      res.status(201).send({ message: "Usuário criado com sucesso!" });
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  };

  async getUser(): Promise<user[]> {
    return await new UserDataBase().get();
  }
}
