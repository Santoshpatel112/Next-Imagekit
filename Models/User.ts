import mongoose, { Schema, models, model } from "mongoose";
import bcryptjs from "bcryptjs";

export interface IUser{
    email :string;
    password:string;
    _id?:mongoose.Types.ObjectId;
    createdAt?:Date;
    updatedAt?:Date;
}
