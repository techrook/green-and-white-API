import mongoose, { Schema} from "mongoose";
import bcrypt from 'bcryptjs'

export interface User extends mongoose.Document {
    username: string;
    password: string;
    API_KEY: string
    max_key_useage: number 
  }

  const UserSchema : Schema<User> = new Schema ({
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    API_KEY: {
      type: String,
      required: true,
      unique: true,
    },
    max_key_useage:{
      type: Number,
      default: 300
    }
  })

  UserSchema.pre<User>(
    'save',
    async function(next) {
        const user = this;
        const hash =  bcrypt.hashSync(this.password, 8);
  
        this.password = hash;
        next()
    }
  );

 



  const USER = mongoose.model<User>("USERS", UserSchema)

  export default USER;