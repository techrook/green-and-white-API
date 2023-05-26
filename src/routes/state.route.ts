import { Router } from "express";
import StateController from "../controller/state.controller";
import authorization from "../middlewares/auth.middleware";

const stateController = new StateController();
const stateRouter = Router();

stateRouter.post("/", authorization, stateController.addState);
stateRouter.get("/",authorization, stateController.getAllState);
stateRouter.get("/state",authorization, stateController.get_A_state);

export default stateRouter;