import { Router } from "express";
import StateController from "../controller/state.controller";
import authorization from "../middlewares/auth.middleware";

const stateController = new StateController();
const stateRouter = Router();

stateRouter.post("/", stateController.addState);
stateRouter.get("/",authorization, stateController.getAllState);
stateRouter.get("/state",authorization, stateController.get_A_state);
stateRouter.get("/northwest",authorization, stateController.get_NorthWest_states);
stateRouter.get("/northcentral",authorization, stateController.get_Northcentral_states);
stateRouter.get("/northeast",authorization, stateController.get_Northeast_states);
stateRouter.get("/southeast",authorization, stateController.get_southeast_states);
stateRouter.get("/southsouth",authorization, stateController.get_southsouth_states);
stateRouter.get("/southwest",authorization, stateController.get_southwest_states);


export default stateRouter;