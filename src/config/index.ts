import * as dotenv from "dotenv";
dotenv.config();

declare var process: {
    env: {
      PORT: string;
      MONGODB_URL:string;
    };
  };

  export const CONFIG = {
    PORT: process.env.PORT,
    MONGODB_URL:process.env.MONGODB_URL
  };