import bcrypt from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { CONFIG } from '../config';
import { HttpException } from '../exceptions/httpException';
import USER,{User} from '../models/user.model';

class UserAuth{
    public async signUp(userData:User){
        const findUser = await USER.findOne({email: userData.email })

        if(findUser) throw new HttpException(409, `${userData.email} already exist.`);

        const newUser = await USER.create(userData)

        return newUser
    }

    public async login(userData: User){

        const findUser = await USER.findOne({email: userData.email })
        if(!findUser) throw new HttpException(404, `${userData.email} does not exist.`);

        const isPasswordMatching: boolean = await bcrypt.compare(userData.password, findUser.password);
        if(!isPasswordMatching) throw new HttpException(406,  "wrong password, enter correct password. ");

        const token = sign({adminId: findUser._id, email: findUser.email},
            CONFIG.SECRET_KEY,
            {expiresIn: CONFIG.JWT_LIFESPAN});

        return token
    }
}

export default UserAuth;