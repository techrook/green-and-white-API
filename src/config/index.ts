import * as dotenv from "dotenv";
dotenv.config();

declare var process: {
    env: {
      PORT: string;
      MONGODB_URL:string;
      SECRET_KEY: string;
      JWT_LIFESPAN: string;
      REDIS_USERNAME:string
      REDIS_PORT:string
      REDIS_HOST:string
      REDIS_PASSWORD:string
    };
  };

  export const CONFIG = {
    PORT: process.env.PORT,
    MONGODB_URL:process.env.MONGODB_URL,
    JWT_LIFESPAN:process.env.JWT_LIFESPAN,
    SECRET_KEY: process.env.SECRET_KEY,
    REDIS_USERNAME: process.env.REDIS_USERNAME,
    REDIS_PORT: process.env.REDIS_PORT,
    REDIS_HOST: process.env.REDIS_HOST,
    REDIS_PASSWORD: process.env.REDIS_PASSWORD
  };