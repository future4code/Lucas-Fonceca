import { app } from "./app";
import { getAllUsers } from "./Endpoints/getAllUsers";

app.get("/index", getAllUsers)