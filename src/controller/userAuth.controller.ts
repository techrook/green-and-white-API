import { HttpException } from "@/exceptions/httpException";
import { NextFunction, Request, Response } from "express";
import UserAuth from "../services/userAuth.service";
import { SignupUser } from "../interfaces/auth.interface";
import genAPIKey from "../middlewares/generateApiKey.middleware";

const userAuth = new UserAuth();
class UserController {
  public signUp = async (req: Request, res: Response, next: NextFunction) => {
    const { username, password }: SignupUser = req.body;
    const API_KEY = genAPIKey(15);
    try {
      const signUpUser: SignupUser = await userAuth.signUp({
        username,
        password,
        API_KEY,
      });
      res.status(201).json({ data: signUpUser, message: "User signed up" });
    } catch (error) {
      res.status(406).json({ message: "User not signed up " });
    }
  };

  public login = async (req: Request, res: Response, next: NextFunction) => {
    const { username, password }: SignupUser = req.body;

    try {
      const apiKey = await userAuth.login({ username, password });
      res.status(202).json({ APIKEY: apiKey, message: "User Logged in" });
    } catch (error) {
      res.status(401).json({ data: error, message: "User not logged in" });
    }
  };
}

export default UserController;
