import { app } from "./app";
import { postUsers } from "./endpoints/postUsers";
import { createProducts } from "./endpoints/postProducts";
import { getAllUsers } from "./endpoints/getUsers";
import { getAllProducts } from "./endpoints/getProducts";
import { postPurchase } from "./endpoints/postPurchases";
import { getPurchasesByUserId } from "./endpoints/getPurchaseById";


app.post("/users", postUsers);
app.post("/products", createProducts);
app.post("/purchases", postPurchase)

app.get("/users", getAllUsers);
app.get("/products", getAllProducts);
app.get("/users/:id/purchases", getPurchasesByUserId)

