import { NextFunction, Request, Response } from "express";
import StateService from "../services/state.service";
import { redis } from "../config/redis.config";
const stateService = new StateService();
class StateController {
  public getAllState = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const cacheKey = `states:${req.query.state}`;
      // Cache miss
      const states = await stateService.getAllState();
      redis.set(cacheKey, JSON.stringify(states));

      return res.status(202).json({ data: states });
    } catch (error) {
      return res.status(404).json({ message: "no states found" });
    }
  };

  public get_A_state = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const cacheKey = `states:${req.query.state}`;

      const state = await stateService.get_A_state(req.query.state);
      redis.set(cacheKey, JSON.stringify(state));
      return res.status(202).json({ data: state });
    } catch (error) {
      return res.status(404).json({ message: "no state found" });
    }
  };

  public get_NorthWest_states = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const cacheKey = `states:NorthWest`;
      const cachedOrder = await redis.get(cacheKey);
      if (cachedOrder) {
        // Cache hit
        return res.status(202).json({ data: JSON.parse(cachedOrder) });
      }

      const states = await stateService.get_NorthWest_states();
      redis.set(cacheKey, JSON.stringify(states));
      res
        .status(202)
        .json({ amount_of_northwest_states: states.length, data: states });
    } catch (error) {
      res.status(404).json({ message: "no states found" });
    }
  };

  public get_Northcentral_states = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const cacheKey = `states:Northcentral`;
      const cachedOrder = await redis.get(cacheKey);
      if (cachedOrder) {
        // Cache hit
        return res.status(202).json({ data: JSON.parse(cachedOrder) });
      }
      const states = await stateService.get_Northcentral_states();
      redis.set(cacheKey, JSON.stringify(states));
      res
        .status(202)
        .json({ amount_of_Northcentral_states: states.length, data: states });
    } catch (error) {
      res.status(404).json({ message: "no states found" });
    }
  };

  public get_Northeast_states = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const cacheKey = `states:Northeast`;
      const cachedOrder = await redis.get(cacheKey);
      if (cachedOrder) {
        // Cache hit
        return res.status(202).json({ data: JSON.parse(cachedOrder) });
      }
      const states = await stateService.get_Northeast_states();
      redis.set(cacheKey, JSON.stringify(states));
      res
        .status(202)
        .json({ amount_of_Northeast_states: states.length, data: states });
    } catch (error) {
      res.status(404).json({ message: "no states found" });
    }
  };

  public get_southeast_states = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const cacheKey = `states:southeast`;
      const cachedOrder = await redis.get(cacheKey);
      if (cachedOrder) {
        // Cache hit
        return res.status(202).json({ data: JSON.parse(cachedOrder) });
      }

      const states = await stateService.get_southeast_states();
      redis.set(cacheKey, JSON.stringify(states));
      res
        .status(202)
        .json({ amount_of_southeast_states: states.length, data: states });
    } catch (error) {
      res.status(404).json({ message: "no states found" });
    }
  };

  public get_southsouth_states = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const cacheKey = `states:southsouth`;
      const cachedOrder = await redis.get(cacheKey);
      if (cachedOrder) {
        // Cache hit
        return res.status(202).json({ data: JSON.parse(cachedOrder) });
      }

      const states = await stateService.get_southsouth_states();
      redis.set(cacheKey, JSON.stringify(states));
      res
        .status(202)
        .json({ amount_of_southsouth_states: states.length, data: states });
    } catch (error) {
      res.status(404).json({ message: "no states found" });
    }
  };

  public get_southwest_states = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const cacheKey = `states:southwest`;
      const cachedOrder = await redis.get(cacheKey);
      if (cachedOrder) {
        // Cache hit
        return res.status(202).json({ data: JSON.parse(cachedOrder) });
      }

      const states = await stateService.get_southwest_states();
      redis.set(cacheKey, JSON.stringify(states));
      res
        .status(202)
        .json({ amount_of_southwest_states: states.length, data: states });
    } catch (error) {
      res.status(404).json({ message: "no states found" });
    }
  };

  public find_state_by_coordinates = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const longitude = req.body.longitude;
    const latitude = req.body.latitude;

    console.log(longitude);
    try {
      const cacheKey = `state:${longitude}:${latitude}`;
      const cachedOrder = await redis.get(cacheKey);
      if (cachedOrder) {
        // Cache hit
        return res.status(202).json({ data: JSON.parse(cachedOrder) });
      }
      const state = await stateService.find_state_by_coord({
        longitude,
        latitude,
      });
      redis.set(cacheKey, JSON.stringify(state));
      res.status(202).json({ data: state });
    } catch (error) {
      res.status(404).json({ message: "no state found" });
    }
  };

  public update_state = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const id = req.params.id;
    const updateData = req.body;
    try {
      const updated_state = await stateService.update_state({ id, updateData });
      res.status(202).json({ data: updated_state });
    } catch (error) {
      res.status(404).json({ message: "no state found" });
    }
  };
}

export default StateController;
