import express, { Express, Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { connection } from "./connection";
import { v4 as uuidv4 } from "uuid";

const app: Express = express();

app.use(express.json());
app.use(cors());

app.post("/users", async (req: Request, res: Response): Promise<void> => {
  const userName: string = req.body.name;
  const userEmail: string = req.body.email;
  const userPassword: string = req.body.password;
  const userId: string = uuidv4();

  if (userName.length > 2 && userEmail.length > 2 && userPassword.length >= 6) {
    try {
      await connection("labeccomerce_users").insert({
        id: userId,
        name: userName,
        email: userEmail,
        password: userPassword,
      });
      res.status(201).send({ message: "Usuário criado com sucesso!" });
    } catch (error: any) {
      res.status(500).send(error.sqlMessage || error.message);
    }
  } else {
    res.status(400).send("Favor conferir os dados inseridos");
  }
});

app.post("/products", async (req: Request, res: Response): Promise<void> => {
  const productId: string = uuidv4();
  const productName: string = req.body.name;
  const productImage: string = req.body.image;
  const productPrice: number = req.body.price

  if (productName.length > 2 && productImage.length > 2 && productPrice > 0) {
    try {
      await connection("labecommerce_products").insert({
        id: productId,
        name: productName,
        image_url: productImage,
        price: productPrice
      });
      res.status(201).send({message: "Produto criado com sucesso!"});
    } catch (error: any) {
      res.status(500).send(error.sqlMessage || error.message);
    }
  } else {
    res.status(400).send("Favor conferir os dados inseridos")
  }
});

app.get("/users", async (req: Request, res: Response): Promise<void> => {
  try {
    const userList = await connection("labeccomerce_users");
    res.status(200).send(userList);
  } catch (error: any) {
    res.status(500).send(error.sqlMessage || error.message);
  }
});

app.get("/products", async (req: Request, res: Response): Promise<void> => {
  try {
    const productsList = await connection("labecommerce_products");
    res.status(200).send(productsList);
  } catch (error: any) {
    res.status(500).send(error.sqlMessage || error.message);
  }
});

const server = app.listen(process.env.PORT || 3306, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost: ${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});
