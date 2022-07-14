import { user } from "../types/user";
import { BaseDatabase } from "./BaseDatabase";

export class UserDataBase extends BaseDatabase {
  public async createUser(
    id: string,
    name: string,
    email: string,
    password: string
  ): Promise<void> {
    try {
      await UserDataBase.connection()
        .insert({
          id,
          name,
          email,
          password,
        })
        .into("User_Arq");
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  public async get(): Promise<user[]> {
    try {
      const users: user[] = [];

      const result = await UserDataBase.connection()
        .select("*")
        .from("User_Arq");

      for (let user of result) {
        users.push(user);
      }

      return users;
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }
}
