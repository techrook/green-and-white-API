import { Router } from "express";
import AdminController from "../controller/adminAuth.controller";

const adminController = new AdminController();
const adminAuthrouter = Router();

adminAuthrouter.post("/signup", adminController.signUp);
adminAuthrouter.post("/login", adminController.login);

export default adminAuthrouter;
