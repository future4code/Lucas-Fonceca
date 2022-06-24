import { UserDatabase } from "../data/UserDatabase";
import { UserInputDTO, LoginInputDTO, user } from "../model/user";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/generateId";
import { TokenGenerator } from "../services/TokenGenerator";

const tokenGenerator = new TokenGenerator();
const userDatabase = new UserDatabase();
const hashManager = new HashManager();
const idGenerator = new IdGenerator();

export class UserBusiness {
  public createUser = async (input: UserInputDTO): Promise<string> => {
    try {
      const { name, email, password } = input;
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
      throw new Error(error.message);
    }
  };

  public login = async (input: LoginInputDTO): Promise<string> => {
    try {
        const { email, password } = input;
      
        // if (!email || !password) {
        //   throw new CustomError(
        //     400,
        //     'Preencha os campos"email" e "password"'
        //   );
        // }
  
        // if (!email.includes("@")) {
        //   throw new InvalidEmail();
        // }
  
        const user = await userDatabase.findUser(email);
  
        // if (!user) {
        //   throw new UserNotFound()
        // }
  
       const comparePassword = await hashManager.compareHash(password, user.password)
  
    //    if(!comparePassword){
    //     throw new InvalidPassword()
    //    }
       
       
  
        const token = tokenGenerator.generateToken(user.id)
       
        return token
      } catch (error: any) {
        // throw new CustomError(400, error.message);
      }
    };
}
