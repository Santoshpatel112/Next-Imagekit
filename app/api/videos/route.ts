import { connectDb } from "@/lib/Db";
import Video from "@/Models/Video";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { NextRequest, NextResponse } from "next/server";

// GET /api/videos - Get videos (all videos or user's videos based on query)
export async function GET(req: NextRequest) {
    try {
        const { searchParams } = new URL(req.url);
        const type = searchParams.get('type'); // 'all' or 'my'
        
        await connectDb();
        
        if (type === 'all') {
            // Public endpoint - get all videos for browsing
            const videos = await Video.find({})
                .populate('userId', 'email') // Include user email
                .sort({ createdAt: -1 })
                .lean();
            
            return NextResponse.json(videos);
        } else {
            // Private endpoint - get user's own videos
            const session = await getServerSession(authOptions);
            
            if (!session || !session.user?.id) {
                return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
            }
            
            const videos = await Video.find({ userId: session.user.id })
                .sort({ createdAt: -1 })
                .lean();

            return NextResponse.json(videos);
        }
    } catch (error) {
        console.error("Error fetching videos:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}

// POST /api/videos - Create a new video
export async function POST(req: NextRequest) {
    try {
        const session = await getServerSession(authOptions);
        
        if (!session || !session.user?.id) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const { title, description, videoUrl, thumbnailUrl } = await req.json();

        if (!title || !description || !videoUrl) {
            return NextResponse.json({ 
                error: "Title, description, and video URL are required" 
            }, { status: 400 });
        }

        await connectDb();

        const newVideo = await Video.create({
            title,
            description,
            videoUrl,
            thumbnailUrl,
            userId: session.user.id,
        });

        return NextResponse.json({ 
            message: "Video created successfully", 
            video: newVideo 
        }, { status: 201 });
    } catch (error) {
        console.error("Error creating video:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}