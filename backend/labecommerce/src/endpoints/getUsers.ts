import { Request, Response } from "express";
import { connection } from "../connection";
import { User } from "../types";

export async function getAllUsers(req: Request, res: Response): Promise<void> {
  try {
    const result = await connection("labecommerce_users");

    const userList = result.map(toUsers);
    if (userList.length < 1) {
      throw new Error("Nenhum usuário encontrado");
    }
    res.status(201).send(userList);
  } catch (error: any) {
    res.status(400).send(error.message);
  }
}

const toUsers = (input: any): User => {
  return {
    id: input.id,
    name: input.name,
    email: input.email,
    password: input.password,
  };
};
