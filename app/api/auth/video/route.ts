import { connectDb } from "@/lib/Db";
import Video, { IVideo } from "@/Models/Video";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth/next";
import { NextResponse ,NextRequest } from "next/server";

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


export async function POST(request:Request){
    try {
        const session=await getServerSession(authOptions);
        if(!session){
            return NextResponse.json({message:"Unauthorized"}, {status:401});
        }
        await connectDb();
        const body:IVideo=await request.json();
        if(!body.title ||!body.Description ||!body.videoUrl ||!body.thumbnailUrl){
            return NextResponse.json({message:"All fields are required"}, {status:400});
        }
        const videodata={
            title:body.title,
            Description:body.Description,
            videoUrl:body.videoUrl,
            thumbnailUrl:body.thumbnailUrl,
            controls:body.controls ||true,
            trinsformation:{
                height:body.trinsformation?.height ||1920,
                width:body.trinsformation?.width ||1080,
                quility:body.trinsformation?.quility ||75,
            }
        };
        const newvideo=await Video.create(videodata);
        return NextResponse.json({message:"Video uploaded successfully",video:newvideo}, {status:201});
    } catch (error) {
        return NextResponse.json({message:"Failed to upload video",error}, {status:500});
    }
}