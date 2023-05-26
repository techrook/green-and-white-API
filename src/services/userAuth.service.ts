import bcrypt from 'bcryptjs'
import { HttpException } from '../exceptions/httpException';
import USER,{User} from '../models/user.model';
import genAPIKey from '../middlewares/generateApiKey.middleware';

class UserAuth{
    public async signUp({username, password, API_KEY}){
        const findUser = await USER.findOne({username: username })

        if(findUser) throw new HttpException(409, `${username} already exist.`);

        const newUser = await USER.create({username, password, API_KEY})
        

        return newUser
    }

    public async login({username, password}){

        const findUser = await USER.findOne({username: username })
        
       
        if(!findUser) throw new HttpException(404, `${username} does not exist.`);
        const isPasswordMatching: boolean =  bcrypt.compareSync(password, findUser.password);
        if(!isPasswordMatching) throw new HttpException(403,"wrong password, enter correct password. ");

        const apikey = genAPIKey(15)
        const updateUserKey = await USER.findByIdAndUpdate((findUser._id),{API_KEY: apikey});
        const updateKeyUseage = await USER.findByIdAndUpdate((findUser._id), {max_key_useage: 30})


        return apikey
    }
}

export default UserAuth;