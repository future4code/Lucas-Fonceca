import { authenticationData } from "../model/authenticationId";
import { user } from "../model/user";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
  private static TABLE_NAME = "users_cookenu";

  async create(user: user): Promise<void> {
    await BaseDatabase.connection(UserDatabase.TABLE_NAME).insert(
      this.toModelUser(user)
    );
  }
  private toModelUser = (user: user): any => {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      password: user.password,
    };
  };

  async queryUser(authId: authenticationData): Promise<void> {
    await BaseDatabase.connection(UserDatabase.TABLE_NAME)
      .select("*")
      .where("id", authId);
  }
}
