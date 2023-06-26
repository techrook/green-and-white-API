import { Router } from "express";
import UserController from "../controller/userAuth.controller";
import { ValidationMiddleware } from "../middlewares/validator.middleware";
import { SignUpUserDto } from "../dtos/userAuth.dto";

const userController = new UserController();
const userAuthRouter = Router();

/**
 * @openapi
 * /api/user/signup:
 *   post:
 *     tags:
 *       - User
 *     summary: Register a user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 default: c.ronaldo
 *               password:
 *                 type: string
 *                 default: greatestofalltime
 *             required:
 *               - username
 *               - password
 *     responses:
 *       201:
 *         description: Success
 *       400:
 *         description: Bad request
 */
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
