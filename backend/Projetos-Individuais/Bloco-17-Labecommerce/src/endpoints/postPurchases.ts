import { Request, Response } from "express";
import { connection } from "../connection";
// import { User } from "../types";
import { v4 as uuidv4 } from "uuid";
import { Products } from "../types";

export async function postPurchase(req: Request, res: Response) {
  const userId: string = req.body.userId;
  const productId: string = req.body.productId;
  const quantity: number = req.body.quantity;
  const id: string = uuidv4();
  const products = await connection("labecommerce_products").where(
    "id",
    productId
  );
  const totalPrice = products.map((products: Products) => {
    return products.price * quantity;
  });
  if (userId && productId && quantity && id && totalPrice) {
    try {
      await connection("labecommerce_purchases").insert({
        id: id,
        user_id: userId,
        product_id: productId,
        quantity: quantity,
        total_price: totalPrice,
      });
      res.status(201).send({ message: "Compra criada com sucesso!" });
    } catch (error: any) {
      res.status(500).send(error.sqlMessage || error.message);
    }
  } else {
    res.status(400).send("Favor conferir os dados inseridos");
  }
}
