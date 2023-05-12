import mongoose, { Schema} from "mongoose";
import bcrypt from 'bcrypt';

export interface User extends mongoose.Document {
    email: string;
    password: string;
    isAdmin: boolean   
  }

  const UserSchema : Schema<User> = new Schema ({
    email: {
      type: String,
      required: true,
      match: [
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "Please provide a valid email",
      ],
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    isAdmin:{
      type: Boolean,
      default: false,

    }
  })

  UserSchema.pre<User>(
    'save',
    async function(next) {
        const user = this;
        const hash = await bcrypt.hash(this.password, 10);
  
        this.password = hash;
        next()
    }
  );

  const USER = mongoose.model<User>("USERS", UserSchema)

  export default USER;