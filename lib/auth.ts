import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "@/Models/User";
import { connectDb } from "./Db";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";
export const authOptions :NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials:{
                email:{label:"Email",type:"text"},
                password:{label:"Password",type:"password"}
            },
            async authorize(credentials){
                // custom login logic
                if(!credentials?.email ||! credentials?.password){
                    throw new Error("Email and Password are required");
                }

                try {
                    await connectDb();
                    const user= await User.findOne({email:credentials.email});
                    if(!user){
                        throw new Error("No user found with the given email");
                    }
                    const ispasswordValid=await bcrypt.compare(credentials.password,user.password);
                    if(!ispasswordValid){
                        throw new Error("Invalid password");
                    }
                    return {
                        id:user._id.toString(), // Ensure id is a string
                        email:user.email,
                    };
                } catch (error) {
                    console.log("Error in user login",error);
                    return NextResponse.json({error:"Internal Server Error"},{status:500});
                }
            }
        })
],
callbacks:{
    async jwt({token,user}){
        if(user){
            token.id=user.id;
        }
        return token;
    },
     async session({session,token}){
        if(session.user){
            session.user.id=token.id as string 
        }
        return session;
    }
},
pages:{
    signIn:"/login",
    error:"/login",
},
session:{
    strategy:"jwt",
    maxAge:30*24*60*60, //30 days
},
secret:process.env.NEXTAUTH_SECRET,

};