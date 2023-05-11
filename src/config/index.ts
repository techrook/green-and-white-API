import * as dotenv from "dotenv";
dotenv.config();

declare var process: {
    env: {
      PORT: string;
      MONGODB_URL:string;
      SECRET_KEY: string;
      JWT_LIFESPAN: string;
    };
  };

  export const CONFIG = {
    PORT: process.env.PORT,
    MONGODB_URL:process.env.MONGODB_URL,
    JWT_LIFESPAN:process.env.JWT_LIFESPAN,
    SECRET_KEY: process.env.SECRET_KEY
  };