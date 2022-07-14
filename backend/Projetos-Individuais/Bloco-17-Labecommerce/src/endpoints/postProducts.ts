import { Request, Response } from "express";
import { connection } from "../connection";
import { Products } from "../types";
import { v4 as uuidv4 } from "uuid";

export async function createProducts(req: Request, res: Response): Promise<void> {
  try {
    const productId: string = uuidv4();
    const productName: string = req.body.name;
    const productImage: string = req.body.image;
    const productPrice: number = req.body.price;

    const result = await connection("labecommerce_products").insert({
        id: productId,
        name: productName,
        image_url: productImage,
        price: productPrice,
      });
    const products = result.map(toProducts);
    if (products.length < 1) {
      throw new Error("Nenhum produto encontrado");
    }
    res.status(201).send({ message: "Produto criado com sucesso!" });
  } catch (error: any) {
    res.status(400).send(error.message);
  }
}

const toProducts = (input: any): Products => {
  return {
    id: input.id,
    name: input.name,
    image: input.image_url,
    price: input.price,
  };
};
