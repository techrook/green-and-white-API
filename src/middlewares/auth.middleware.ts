import { NextFunction, Response } from 'express';
import { HttpException } from '../exceptions/httpException';
import { RequestWithUser, JwtPayload } from '@interfaces/auth.interface';
import USER from '../models/user.model';


const authorization = async (req: RequestWithUser , res: Response, next: NextFunction) => {


  try {
    let api_key = req.header("x-api-key"); //Add API key to headers

  if(!api_key) throw new HttpException(403, `enter api key`);
  let account = await USER.findOne({username: req.query.username });

  if(!account) throw new HttpException(403, `user not found`);
  var signupKey = String(api_key)
  const userKey = account.API_KEY.trim()

  if ( userKey !== signupKey )  throw new HttpException(403, 'invalid apikey')
   if (account.max_key_useage == 0 )  throw new HttpException(403, `Api key expired. login to generate new api key `);

  if(account.max_key_useage > 0 ){
    const new_key_usage_value = account.max_key_useage -1
   const theUser =  await USER.findByIdAndUpdate((account._id), {max_key_useage: new_key_usage_value}, { new: true })

    theUser.save()
    
  }


  next()
  } catch (error) {
    res.status(401).json("Authentication invaild");
  }
  
};

export default authorization;
