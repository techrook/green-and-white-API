import { Router } from "express";
import UserController from "../controller/userAuth.controller";

const userController = new UserController();
const userAuthRouter = Router();

userAuthRouter.post("/signup", userController.signUp);
userAuthRouter.post("/login", userController.login);

export default userAuthRouter;