import { connectDb } from "@/lib/Db";
import User from "@/Models/User";
import { error } from "console";
import { NextRequest ,NextResponse } from "next/server";

export async function POST(req :NextRequest){
    try {
        const {email ,password} =await req.json();
        if(!email ||!password){
            return NextResponse.json({error:"Email and password are Required"},{status:400});
        }
        await connectDb();
        const exitinguser=await User.findOne({email});
        if(exitinguser){
            return NextResponse.json({error:"User already exists"},{status:400});
        }
        const newUser= await User.create({
            email,
            password,
        });
        return NextResponse.json({message:"User registered successfully",newUser
        },{status:201});
    } catch (error) {
        console.log("Error in user registration",error);
        return NextResponse.json({error:"Internal Server Error"},{status:500});
    }
}