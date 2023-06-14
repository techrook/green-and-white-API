import { Router } from "express";
import UserController from "../controller/userAuth.controller";
import { ValidationMiddleware } from "../middlewares/validator.middleware";
import { SignUpUserDto } from "../dtos/userAuth.dto";

const userController = new UserController();
const userAuthRouter = Router();

userAuthRouter.post(
  "/signup",
  ValidationMiddleware(SignUpUserDto),
  userController.signUp
);
userAuthRouter.post(
  "/login",
  ValidationMiddleware(SignUpUserDto),
  userController.login
);

export default userAuthRouter;
