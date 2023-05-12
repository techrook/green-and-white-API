import bcrypt from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { CONFIG } from '../config';
import { HttpException } from '../exceptions/httpException';
import ADMIN, {Admin} from '../models/admin.model';

class AdminAuth{
    public async signUp (adminData:Admin){
        const findAdmin = await ADMIN.findOne({email  : adminData.email})
        if(findAdmin) throw new HttpException(409, `${adminData.email} already exist.`);

        const newAdmin = await ADMIN.create(adminData)

        return newAdmin
    }

    public async login (adminData:Admin){
        const findAdmin = await ADMIN.findOne({email  : adminData.email})
        if(!findAdmin) throw new HttpException(404, `${adminData.email} does not already exist.`);

        const isPasswordMatching: boolean = await bcrypt.compare(adminData.password, findAdmin.password)
        if(!isPasswordMatching) throw new HttpException(406,  "wrong password, enter correct password. ");

        const token = sign({adminId: findAdmin._id, email: findAdmin.email},
            CONFIG.SECRET_KEY,
            {expiresIn: CONFIG.JWT_LIFESPAN});

        return token
    }


}

export default AdminAuth;