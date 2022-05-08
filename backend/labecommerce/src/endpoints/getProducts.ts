import { Request, Response } from "express";
import { connection } from "../connection";
import { Products } from "../types";

export async function getAllProducts(req: Request, res: Response): Promise<void> {
  try {
    const result = await connection("labecommerce_products");

    const productsList = result.map(toProducts);
    if (productsList.length < 1) {
      throw new Error("Nenhum usuário encontrado");
    }
    res.status(201).send(productsList);
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
