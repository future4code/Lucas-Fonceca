import { Request, Response } from "express";
import { connection } from "../connection";
import { PurchaseByUserId } from "../types";

export async function getPurchasesByUserId(req: Request, res: Response) {
  const userId: string = req.params.id;
  try {
    const result = await connection("labecommerce_purchases")
      .select(
        "labecommerce_products.name AS productName",
        "labecommerce_users.name AS userName",
        "total_price as totalPrice",
        "price",
        "quantity"
      )
      .join(
        "labecommerce_users",
        "labecommerce_purchases.user_id",
        "labecommerce_users.id"
      )
      .join(
        "labecommerce_products",
        "labecommerce_purchases.product_id",
        "labecommerce_products.id"
      )
      .where("user_id", userId);

    const purchaseList = result.map(toPurchase);
    if (purchaseList.length < 1) {
      throw new Error("Nenhuma compra encontrada");
    }
    res.status(201).send(purchaseList);
  } catch (error: any) {
    res.status(400).send(error.message);
  }
}

const toPurchase = (input: any): PurchaseByUserId => {
  return {
    productName: input.productName,
    quantity: input.quantity,
    totalPrice: input.totalPrice,
    price: input.price,
  };
};
