import { NextFunction, Request, Response } from 'express';
import AdminAuth from '../services/adminAuth.service';
import { SignupUser } from '../interfaces/adminAuth.interface';

const adminAuth = new AdminAuth()
class AdminController{
    public signUp = async (req: Request, res: Response, next: NextFunction) => {
        try {
             const signUpAdmin : SignupUser = await adminAuth.signUp(req.body)
             res.status(201).json({data: signUpAdmin, message: 'admin signed up'})
        } catch (error) {
            res.status(406).json({message: 'admin not signed up '})
        }
    }
    public login = async (req: Request, res: Response, next: NextFunction) =>{
        try {
            const  token = await adminAuth.login(req.body)
            res.status(202).json({Token: token, message: 'Admin Logged in'})
        } catch (error) {
            res.status(401).json({data: error, message: 'Admin not logged in'})
        }
    }
}

export default AdminController;