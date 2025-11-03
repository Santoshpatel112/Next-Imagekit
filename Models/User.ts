import mongoose, { Schema, models, model } from "mongoose";
import bcryptjs from "bcryptjs";

export interface IUser{
    email :string;
    password:string;
    _id?:mongoose.Types.ObjectId;
    createdAt?:Date;
    updatedAt?:Date;
}
const UserSchema=new Schema <IUser>({
    email :{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    }
},{
    timestamps:true,
});
