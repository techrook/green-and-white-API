import { redis } from "../config/redis.config";
import { Request, Response, NextFunction } from "express";


const cacheMiddleware = async(req: Request, res: Response, next: NextFunction) => {
    const cacheKey = `states:${req.query.state}`;
  
    // Check if the data is cached
    const cachedData = await redis.get(cacheKey) 
      
  
      if (cachedData) {
        // Cache hit, return the cached data
        const parsedData = JSON.parse(cachedData);
        return res.status(202).json({ data: parsedData });
      }
  
      // Cache miss, proceed to the next middleware or route handler
      next();
    
  };
  

 export default cacheMiddleware;