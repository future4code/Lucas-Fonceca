import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { authenticationData } from "../model/authenticationId";
import { GetUserProfileDTO, LoginInputDTO, UserInputDTO } from "../model/user";

export class UserController {
  public signup = async (req: Request, res: Response) => {
    try {
      const { name, email, password } = req.body;

      const input: UserInputDTO = {
        name,
        email,
        password,
      };
      const userBusiness = new UserBusiness();
      const token = await userBusiness.createUser(input);

      res.status(201).send({ message: "Usuário criado!", token });
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  };

  public login = async (req: Request, res: Response) => {
    try {
      const { email, password } = req.body;
      const input: LoginInputDTO = {
        email,
        password,
      };
      const userBusiness = new UserBusiness();
      const token = await userBusiness.login(input);

      res.status(200).send({ message: "Usuário logado!", token });
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  };

  public queryUser = async (req: Request, res: Response) => {
    try {
      const userBusiness = new UserBusiness();

      const token = req.headers.authorization as string;

      const user = await userBusiness.getUser(token);

      res.status(200).send(user);
    } catch (error: any) {
      res.status(400).send({
        message: error.message,
      });
    }
  };
}
