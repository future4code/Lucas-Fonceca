import { UserDatabase } from "../data/UserDatabase";
import { UserInputDTO, LoginInputDTO, user } from "../model/user";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/generateId";
import { TokenGenerator } from "../services/TokenGenerator";
import {
  CustomError,
  InvalidEmail,
  InvalidPassword,
  UserNotFound,
} from "../error/customError";

const tokenGenerator = new TokenGenerator();
const userDatabase = new UserDatabase();
const hashManager = new HashManager();
const idGenerator = new IdGenerator();

export class UserBusiness {
  public createUser = async (input: UserInputDTO): Promise<string> => {
    try {
      const { name, email, password } = input;
      if (!name) {
        throw new CustomError(400, 'O campo "name" é obrigatório');
      }
      if (!email) {
        throw new CustomError(400, 'O campo "email" é obrigatório');
      }
      if (!password) {
        throw new CustomError(400, 'O campo "password" é obrigatório');
      }

      if (password.length < 6) {
        throw new InvalidPassword();
      }
      if (!email.includes("@")) {
        throw new InvalidEmail();
      }

      const id: string = idGenerator.generateId();

      const hashPassword = await hashManager.generateHash(password);

      const user: user = {
        id,
        name,
        email,
        password: hashPassword,
      };

      await userDatabase.insertUser(user);
      const token = tokenGenerator.generateToken(id);

      return token;
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

  public login = async (input: LoginInputDTO): Promise<string> => {
    try {
      const { email, password } = input;

      if (!email) {
        throw new CustomError(400, 'O campo "email" é obrigatório');
      }
      if (!password) {
        throw new CustomError(400, 'O campo "password" é obrigatório');
      }

      if (!email.includes("@")) {
        throw new InvalidEmail();
      }

      if (password.length < 6) {
        throw new InvalidPassword();
      }

      const user = await userDatabase.findUser(email);

      if (!user) {
        throw new UserNotFound();
      }

      const comparePassword = await hashManager.compareHash(
        password,
        user.password
      );

      if (!comparePassword) {
        throw new InvalidPassword();
      }

      const token = tokenGenerator.generateToken(user.id);

      return token;
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };
}
