import express from "express";
import { UserController } from "../UserController";

export const userRouter = express.Router();
const userController = new UserController();

userRouter.post("/signup", userController.signup);
userRouter.post("/login", userController.login);
userRouter.get("/profile", userController.userprofile);
userRouter.get("/:id", userController.friendprofile);
