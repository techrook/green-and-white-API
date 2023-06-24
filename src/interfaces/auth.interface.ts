import { Request } from "express";

export interface RequestWithUser extends Request {
  user: {
    _id: string;
    email: string;
  };
}

export interface JwtPayload {
  adminId: string;
  email: string;
}

export interface SignupUser {
  username: string;
  password: string;
  API_KEY: string;
}
