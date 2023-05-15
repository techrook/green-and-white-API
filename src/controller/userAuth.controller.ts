import { NextFunction, Request, Response } from 'express';
import UserAuth from '../services/userAuth.service';
import { SignupUser } from '../interfaces/auth.interface';

const userAuth = new UserAuth();
class UserController{
    public signUp = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const signUpUser: SignupUser = await userAuth.signUp(req.body);
            res.status(201).json({data: signUpUser, message: 'User signed up'});
        } catch (error) {
            res.status(406).json({message: 'User not signed up '});
        }
    }

    public login = async (req: Request, res: Response, next: NextFunction) =>{
        try {
            const  token = await userAuth.login(req.body)
            res.status(202).json({Token: token, message: 'User Logged in'})
        } catch (error) {
            res.status(401).json({data: error, message: 'User not logged in'})
        }
    }
}

export default UserController;