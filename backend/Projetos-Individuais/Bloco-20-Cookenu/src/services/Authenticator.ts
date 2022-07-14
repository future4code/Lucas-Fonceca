import * as jwt from "jsonwebtoken";
import { authenticationData } from "../model/authenticationId";
import dotenv from "dotenv";

dotenv.config();

export class Authenticator {
  public generateToken = (payload: authenticationData) => {
    const token = jwt.sign(payload, process.env.JWT_KEY as string, {
      expiresIn: "900h",
    });
    return token;
  };

  public getTokenData = (token: string): authenticationData => {
    const payload = jwt.verify(
      token,
      process.env.JWT_KEY as string
    ) as jwt.JwtPayload;
    const result: authenticationData = { id: payload.id };
    return result;
  };
}
