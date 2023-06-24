import { NextFunction, Request, Response } from "express";
import RegionService from "../services/region.service";
import { RequestWithUser } from "../interfaces/auth.interface";

const regionService = new RegionService();

export class RegionController {
  public addRegion = async (
    req: RequestWithUser,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const addedRegion = await regionService.addRegion(req.body);
      res.status(201).json({ data: addedRegion, message: "new Region added" });
    } catch (error) {
      res.status(406).json({ message: "Region not added " });
    }
  };
}
