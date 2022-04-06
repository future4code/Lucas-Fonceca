import express, { Express, Request, response, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { v4 as generateId } from "uuid";
import { productsArray } from "./data";

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

app.get("/test", (req: Request, res: Response) => {
  res.send("A API está funcionando bonitinha");
});

const Errors: {
  [key: string]: {
    status: number;
    message: string;
  };
} = {
  MISSING_PARAMETERS: {
    status: 422,
    message:
      "Parece que você se esqueceu de alguma informação. Favor conferir a documentação",
  },
  MISSING_PRICE: {
    status: 422,
    message: "Ops... Faltou informar o novo preço.",
  },
  PRICE_MUST_BE_POSITIVE: {
    status: 422,
    message: "O preço precisa ser positivo e maior que 0.",
  },
  NAME_MUST_BE_STRING: {
    status: 406,
    message: "O nome precisa ser uma string",
  },
  PRICE_MUST_BE_NUMBER: {
    status: 406,
    message: "O preço precisa ser um número",
  },
  SOMETHING_WENT_WRONG: {
    status: 500,
    message: "Algo inesperado aconteceu.",
  },
  PRODUCT_NOT_FOUND: {
    status: 404,
    message: "Parece que esse produto não existe",
  },
};

app.post("/products/new", (req: Request, res: Response) => {
  try {
    const name = req.body.productName;
    const price = req.body.productPrice;

    if (!name || !price) {
      throw new Error(Errors.MISSING_PARAMETERS.message);
    }
    if (price <= 0) {
      throw new Error(Errors.PRICE_MUST_BE_POSITIVE.message);
    }
    if (typeof name !== "string") {
      throw new Error(Errors.NAME_MUST_BE_STRING.message);
    }
    if (typeof price !== "number") {
      throw new Error(Errors.PRICE_MUST_BE_NUMBER.message);
    }
    productsArray.list.push({
      id: generateId(),
      name: name,
      price: price,
    });
  } catch (error: any) {
    switch (error.message) {
      case Errors.MISSING_PARAMETERS.message:
        res
          .status(Errors.MISSING_PARAMETERS.status)
          .send(Errors.MISSING_PARAMETERS.message);
        break;
      case Errors.PRICE_MUST_BE_POSITIVE.message:
        res
          .status(Errors.PRICE_MUST_BE_POSITIVE.status)
          .send(Errors.PRICE_MUST_BE_POSITIVE.message);
        break;
      case Errors.NAME_MUST_BE_STRING.message:
        res
          .status(Errors.NAME_MUST_BE_STRING.status)
          .send(Errors.NAME_MUST_BE_STRING.message);
        break;
      case Errors.PRICE_MUST_BE_NUMBER.message:
        res
          .status(Errors.PRICE_MUST_BE_NUMBER.status)
          .send(Errors.PRICE_MUST_BE_NUMBER.message);
        break;
      default:
        response
          .status(Errors.SOMETHING_WENT_WRONG.status)
          .send(Errors.SOMETHING_WENT_WRONG.message);
        break;
    }
  }
  res.status(201).send(productsArray);
});

app.get("/products", (req: Request, res: Response) => {
  res.send(productsArray.list);
});

app.put("/products/edit-price", (req: Request, res: Response) => {
  try {
    const authId = req.headers.id;
    const { newPrice } = req.body;

    const productWithNewPrice = productsArray?.list.find(
      (product) => product.id === authId
    );
    if (!productWithNewPrice) {
      throw new Error(Errors.MISSING_PARAMETERS.message);
    }
    if (typeof newPrice !== "number") {
      throw new Error(Errors.PRICE_MUST_BE_NUMBER.message);
    }
    if (newPrice <= 0) {
      throw new Error(Errors.PRICE_MUST_BE_POSITIVE.message);
    }
    productWithNewPrice.price = newPrice;
  } catch (error: any) {
    switch (error.message) {
      case Errors.MISSING_PARAMETERS.message:
        response
          .status(Errors.MISSING_PARAMETERS.status)
          .send(Errors.MISSING_PARAMETERS.message);
        break;
      case Errors.PRICE_MUST_BE_NUMBER.message:
        response
          .status(Errors.PRICE_MUST_BE_NUMBER.status)
          .send(Errors.PRICE_MUST_BE_NUMBER.message);
        break;
      case Errors.PRICE_MUST_BE_POSITIVE.message:
        response
          .status(Errors.PRICE_MUST_BE_POSITIVE.status)
          .send(Errors.PRICE_MUST_BE_POSITIVE.message);
        break;
      default:
        response
          .status(Errors.SOMETHING_WENT_WRONG.status)
          .send(Errors.SOMETHING_WENT_WRONG.message);
        break;
    }
  }
  res.status(200).send(productsArray);
});

app.delete("/products/:id", (req: Request, res: Response) => {
  try {
    const productId = req.params.id;

    const retorna = productsArray.list.findIndex((product) => product.id === productId)

    if (retorna === -1) {
      throw new Error(Errors.MISSING_PARAMETERS.message);
    }

    productsArray.list.splice(retorna, 1)

    res.status(200).send(productsArray.list);
  } catch (error: any) {
    console.log(error.message);
    switch (error.message) {
      case Errors.MISSING_PARAMETERS.message:
        res
          .status(Errors.MISSING_PARAMETERS.status)
          .send(Errors.MISSING_PARAMETERS.message);
        break;
      default:
        res
          .status(Errors.SOMETHING_WENT_WRONG.status)
          .send(Errors.SOMETHING_WENT_WRONG.message);
    }
  }
});
