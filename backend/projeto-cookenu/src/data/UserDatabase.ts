import { authenticationData } from "../model/authenticationId";
import { user } from "../model/user";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
  public findUser = async (email: string) => {
    try {
      const result = await UserDatabase.connection("users_cookenu")
        .select()
        .where({ email });
      return result[0];
    } catch (error: any) {
      // throw new
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
    } catch (error) {}
  };

  // private static TABLE_NAME = "users_cookenu";

  // async create(user: user): Promise<void> {
  //   await BaseDatabase.connection(UserDatabase.TABLE_NAME).insert(
  //     this.toModelUser(user)
  //   );
  // }
  // private toModelUser = (user: user): any => {
  //   return {
  //     id: user.id,
  //     name: user.name,
  //     email: user.email,
  //     password: user.password,
  //   };
  // };

  // async queryUser(authId: authenticationData): Promise<void> {
  //   await BaseDatabase.connection(UserDatabase.TABLE_NAME)
  //     .select("*")
  //     .where("id", authId);
  // }
}
