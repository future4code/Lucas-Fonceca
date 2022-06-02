import { user } from "../model/user";
import { BaseDatabase } from "./BaseDataBase";

export class UserDatabase extends BaseDatabase {
  private static TABLE_NAME = "labook_users";

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

  async getAllUsers(): Promise<user[]> {
    const userDatabase = new UserDatabase();

    const result = await userDatabase.getAllUsers();
    return result;
  }
}
