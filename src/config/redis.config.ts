import { createClient } from "redis";

import { CONFIG } from ".";

const redis = createClient({
  url: `redis://${CONFIG.REDIS_USERNAME}:${CONFIG.REDIS_PASSWORD}@${CONFIG.REDIS_HOST}:${CONFIG.REDIS_PORT}`,
});

const RedisConnect = async () => {
  try {
    redis.on("connect", () => {
      console.log("Redis connected");
    });

    redis.on("error", () => {
      console.log("Redis connection error");
    });

    await redis.connect();
  } catch (error) {
    console.log(error);
  }
};

export { RedisConnect, redis };
