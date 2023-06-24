import { Router } from "express";
import { RegionController } from "../controller/region.controller";
import authorization from "../middlewares/auth.middleware";

const regionController = new RegionController();
const regionRouter = Router();

regionRouter.post("/addregion", authorization, regionController.addRegion);

export default regionRouter;
