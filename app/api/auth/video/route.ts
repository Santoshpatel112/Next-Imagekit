import { connectDb } from "@/lib/Db";
import Video from "@/Models/Video";
import { NextResponse } from "next/server";


export async function GET(){
    try {
        await connectDb();
        // fetch all videos from the database desending order of createdAt field 
        // lean() method to get plain JavaScript objects instead of Mongoose documents :(Convert the results into plain JS objects)
        const videos=await Video.find({}).sort({createdAt:-1}).lean();
        if(!videos ||videos.length===0){
            return NextResponse.json({message:"No videos found"}, {status:404});
        }
        return NextResponse.json({videos}, {status:200});
    } catch (error) {
        console.error("Error fetching videos:", error);
        return NextResponse.json({message:"Feiled to fetch Video",error}, {status:500});
    }
}