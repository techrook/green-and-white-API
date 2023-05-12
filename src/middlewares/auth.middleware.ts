import { NextFunction, Response } from "express";
import { HttpException } from "../exceptions/httpException";
import { RequestWithUser, JwtPayload } from "../interfaces/auth.interface";
import jwt from 'jsonwebtoken';
import { CONFIG } from "../config";


const authorization = (req: RequestWithUser , res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization as string;
    if (!authHeader || !authHeader.startsWith("Bearer ")){
      next(new HttpException(401, 'Authentication token missing'));
    } 
  
    const token = authHeader.split(" ")[1];

    try {
        const payload = jwt.verify(token, CONFIG.SECRET_KEY) as JwtPayload
        req.user  = {
         userId: payload.userId,
         email: payload.email
       };
   
       next()
     } catch (error) {
       res.status(401).json("Authentication invaild");
     }
};

export default authorization;
