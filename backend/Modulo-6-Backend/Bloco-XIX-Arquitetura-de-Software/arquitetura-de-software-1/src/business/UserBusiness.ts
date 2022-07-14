import { v4 as generateId } from "uuid";
import { UserDataBase } from "../data/UserDatabase";
import { user } from "../types/user";

export class UserBusiness {
  public createUser = async (user: any) => {
    try {
      if (!user.name || !user.email || !user.password) {
        throw new Error("Please fill all the fields");
      }

      if (user.email.indexOf("@") === -1) {
        throw new Error("Invalid Email");
      }

      if (user.password.length < 6) {
        throw new Error("Password must have at least 6 characters");
      }

      const id = generateId();

      await new UserDataBase().createUser(
        id,
        user.email,
        user.name,
        user.password
      );
    } catch (error: any) {
      throw new Error(
        error.message ||
          "Error creating user. Please check your system administrator."
      );
    }
  };

  public async get(): Promise<user[]> {
    return await new UserDataBase().get();
  }
}
