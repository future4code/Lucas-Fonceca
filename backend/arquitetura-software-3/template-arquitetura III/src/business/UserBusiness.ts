import { UserDatabase } from "../data/UserDatabase";
import {
  InvalidEmail,
  InvalidName,
  InvalidPassword,
  PasswordTooShort,
} from "../error/customError";
import { User, UserInputDTO } from "../model/user";
import { generateId } from "../services/generateId";

export class UserBusiness {
  public create = async (input: UserInputDTO) => {
    try {
      const { name, password, email } = input;

      if (!email || !email.includes("@")) {
        throw new InvalidEmail();
      }

      if (!name || name.length < 2) {
        throw new InvalidName();
      }

      if (!password) {
        throw new InvalidPassword();
      }

      if (password.length < 8) {
        throw new PasswordTooShort();
      }

      const id: string = generateId();

      const userDatabase = new UserDatabase();
      const user: User = {
        id,
        name,
        email,
        password,
      };

      await userDatabase.create(user);
    } catch (error: any) {
      throw new Error(error.message);
    }
  };
  async getAllUsers(): Promise<User[]> {
    const userDatabase = new UserDatabase();

    const result = await userDatabase.getAllUsers();
    return result;
  }
}
