import { Request } from 'express';

export interface RequestWithUser extends Request {
    user: {
      userId : string,
      email: string
    };
  
  }
  
  export interface JwtPayload {
    userId: string
    email: string
  }
  