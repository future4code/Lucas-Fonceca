import express, { Express, request, Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { user, users } from "./data";

const app: Express = express();

app.use(express.json());
app.use(cors());

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost: ${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});

app.get("/usuarios", (req: Request, res: Response) => {});

// o método é o get e a entidade é /usuarios

app.get("/usuarios/admin-list", (req: Request, res: Response) => {
  const adminList = users.filter((user) => {
    return user.type === "ADMIN";
  });
  res.status(200).send(adminList);
});

app.get("/usuarios/search-by-name", (req: Request, res: Response) => {
  let errorCode = 400;
  try {
    const name: string = req.query.name as string;

    const user: user | undefined = users.find((user) => user.name === name);

    if (!user) {
      errorCode = 404;
      throw new Error("User not found");
    }
    res.status(200).send({ user });
  } catch (error: any) {
    res.status(errorCode).send(error.message);
  }
});

app.put("/usuarios", (req: Request, res: Response) => {
    let errorCode = 400;
    try {
        const { id, name, type, email, age }: user = req.body
        
        if (!id) {
            errorCode = 422;
            throw new Error ("id is missing. Please, try again");
        }
        if (!name) {
            errorCode = 422;
            throw new Error ("name is missing. Please, try again");
        }
        if (!type) {
            errorCode = 422;
            throw new Error ("type is missing. Please, try again");
        }
        if (!email) {
            errorCode = 422;
            throw new Error ("email is missing. Please, try again");
        }
        if (!age) {
            errorCode = 422;
            throw new Error ("age is missing. Please, try again");
        }
        const newUser: user = {
            id,
            name,
            age, 
            email, 
            type
        }

        users.push(newUser)

        res.status(200).send(`User created succesfully`)
    } catch (error: any) {
        res.status(errorCode).send(error.message)
    }
})