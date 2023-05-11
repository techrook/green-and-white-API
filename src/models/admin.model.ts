import mongoose, { Schema} from "mongoose";
import bcrypt from 'bcrypt';

export interface Admin extends mongoose.Document {
    email: string;
    password: string;
    isAdmin: boolean   
  }

  const AdminSchema : Schema<Admin> = new Schema ({
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
      default: true,

    }
  })

  AdminSchema.pre<Admin>(
    'save',
    async function(next) {
        const user = this;
        const hash = await bcrypt.hash(this.password, 10);
  
        this.password = hash;
        next()
    }
  );

  const ADMIN = mongoose.model<Admin>("USERS", AdminSchema);

  export default ADMIN;