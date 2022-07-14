import { Request, Response } from "express";
import { connection } from "../connection";
import { User } from "../types";
import { v4 as uuidv4 } from "uuid";

export async function postUsers(req: Request, res: Response): Promise<void> {
  const userName: string = req.body.name;
  const userEmail: string = req.body.email;
  const userPassword: string = req.body.password;
  const userId: string = uuidv4();

  if (userName.length > 2 && userEmail.length > 2 && userPassword.length >= 6) {
    try {
      await connection("labecommerce_users").insert({
        id: userId,
        name: userName,
        email: userEmail,
        password: userPassword,
      });
      res.status(201).send({ message: "Usuário criado com sucesso!" });
    } catch (error: any) {
      res.status(500).send(error.sqlMessage || error.message);
    }
  } else {
    res.status(400).send("Favor conferir os dados inseridos");
  }
};

const toUsers = (input: any): User => {
  return {
    id: input.id,
    name: input.name,
    email: input.email,
    password: input.password,
  };
};
