import { app } from "./controller/app";
import { recipeRouter } from "./controller/routes/recipeRouter";

app.use("/", recipeRouter)