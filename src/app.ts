import { NextFunction, Request, Response } from 'express';
import { ErrorMiddleware } from './middlewares/error.middleware'; 
import  connect  from './config/db.config';
import userAuthRouter from './routes/userAuth.route';
import regionRouter from './routes/region.route';
import stateRouter from './routes/state.route';
import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';


require('dotenv').config();

connect();
const app = express();


//middlewares
app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use(express.json());

app.get("/", ( req: Request, res: Response) => {
  res.send('Green and white an API for geographic information of giant of Africa, Nigeria ')
})

//routes
app.use('/user', userAuthRouter);
app.use('/regions', regionRouter);
app.use('/states', stateRouter);
app.use(ErrorMiddleware)



export default app;
