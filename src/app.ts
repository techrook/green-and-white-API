import * as dotenv from "dotenv";
dotenv.config();

import { Request, Response } from "express";
import { ErrorMiddleware } from "./middlewares/error.middleware";
import userAuthRouter from "./routes/userAuth.route";
import regionRouter from "./routes/region.route";
import stateRouter from "./routes/state.route";
import express from "express";
import morgan from "morgan";
import rateLimit from "express-rate-limit";
import helmet from "helmet";
import cors from "cors";

const app = express();
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

// Middlewares
app.use(morgan("dev"));
app.use(helmet());
app.use(cors());
app.use(express.json());
// Apply the rate limiting middleware to all requests
app.use(limiter);

app.get("/", (req: Request, res: Response) => {
  res.send(
    "Green and white an API for geographic information of giant of Africa, Nigeria "
  );
});

// Routes
app.use("/api/user", userAuthRouter);
app.use("/regions", regionRouter);
app.use("/api/states/", stateRouter);
app.use(ErrorMiddleware);

export default app;
