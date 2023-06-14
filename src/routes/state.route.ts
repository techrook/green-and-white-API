import { Router } from "express";
import StateController from "../controller/state.controller";
import authorization from "../middlewares/auth.middleware";
import { stateDto } from "../dtos/state.dto";
import { ValidationMiddleware } from "../middlewares/validator.middleware";

const stateController = new StateController();
const stateRouter = Router();

stateRouter.post("/", ValidationMiddleware(stateDto), stateController.addState);
stateRouter.get("/", authorization, stateController.getAllState);
stateRouter.get("/state", authorization, stateController.get_A_state);
stateRouter.get(
  "/northwest",
  authorization,
  stateController.get_NorthWest_states
);
stateRouter.get(
  "/northcentral",
  authorization,
  stateController.get_Northcentral_states
);
stateRouter.get(
  "/northeast",
  authorization,
  stateController.get_Northeast_states
);
stateRouter.get(
  "/southeast",
  authorization,
  stateController.get_southeast_states
);
stateRouter.get(
  "/southsouth",
  authorization,
  stateController.get_southsouth_states
);
stateRouter.get(
  "/southwest",
  authorization,
  stateController.get_southwest_states
);
stateRouter.get(
  "/coordinates",
  authorization,
  stateController.find_state_by_coordinates
);
stateRouter.patch("/update", authorization, stateController.update_state);
export default stateRouter;
