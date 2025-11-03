import mongoose, { Schema, models, model } from "mongoose";
import bcrypt from "bcryptjs";

// Define the User interface
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


// Hash password before saving the user

UserSchema.pre("save", async function(next){
    if(this.isModified("password")){
      this.password=  await bcrypt.hash(this.password,10)
    }
    next();
})


const User=models?.User ||model<IUser>("User",UserSchema);