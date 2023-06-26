import app from "./app";
import { CONFIG } from "./config";
import connect from "./config/db.config";
import { RedisConnect } from "./config/redis.config";
import swaggerDocs from "./utils/swagger";

const port = CONFIG.PORT;
app.listen(port, async () => {
  console.log(`Listening: http://localhost:${port}`);
  await RedisConnect();
  await connect();
  swaggerDocs(app, port);
});
