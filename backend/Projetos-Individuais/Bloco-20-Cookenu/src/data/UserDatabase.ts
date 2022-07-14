import { CustomError } from "../error/customError";
import { user } from "../model/user";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
  public findUser = async (id: string) => {
    try {
      const result = await UserDatabase.connection("users_cookenu")
        .select("id", "name", "email")
        .where({ id });
      return result;
    } catch (error: any) {
      throw new CustomError(404, error.message);
    }
  };

  public findFriend = async (id: string) => {
    try {
      const result = await UserDatabase.connection("users_cookenu")
        .select("id", "name", "email")
        .where({ id });
      return result;
    } catch (error: any) {
      throw new CustomError(404, error.message);
    }
  };

  public findUserByEmail = async (email: string) => {
    try {
      const result = await UserDatabase.connection("users_cookenu")
        .select()
        .where({ email });
      return result[0];
    } catch (error: any) {
      throw new CustomError(404, error.message);
    }
  };
  public insertUser = async (user: user) => {
    try {
      await UserDatabase.connection
        .insert({
          id: user.id,
          name: user.name,
          email: user.email,
          password: user.password,
        })
        .into("users_cookenu");
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };
}
