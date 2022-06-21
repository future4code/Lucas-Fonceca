import express from "express";
import { UserController } from "../UserController";

export const userRouter = express.Router();

const userController = new UserController();

userRouter.post("/users", userController.createUser);
userRouter.get("/users", userController.getAllUsers);
