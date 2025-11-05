import { connectDb } from "@/lib/Db";
import Video from "@/Models/Video";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { NextRequest, NextResponse } from "next/server";

// DELETE /api/videos/[id] - Delete a specific video
export async function DELETE(
    req: NextRequest,
    { params }: { params: { id: string } }
) {
    try {
        const session = await getServerSession(authOptions);
        
        if (!session || !session.user?.id) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const { id } = params;

        if (!id) {
            return NextResponse.json({ error: "Video ID is required" }, { status: 400 });
        }

        await connectDb();

        // Find the video and check if it belongs to the user
        const video = await Video.findOne({ _id: id, userId: session.user.id });

        if (!video) {
            return NextResponse.json({ 
                error: "Video not found or you don't have permission to delete it" 
            }, { status: 404 });
        }

        await Video.findByIdAndDelete(id);

        return NextResponse.json({ message: "Video deleted successfully" });
    } catch (error) {
        console.error("Error deleting video:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}

// GET /api/videos/[id] - Get a specific video
export async function GET(
    req: NextRequest,
    { params }: { params: { id: string } }
) {
    try {
        const session = await getServerSession(authOptions);
        
        if (!session || !session.user?.id) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const { id } = params;

        if (!id) {
            return NextResponse.json({ error: "Video ID is required" }, { status: 400 });
        }

        await connectDb();

        const video = await Video.findOne({ _id: id, userId: session.user.id });

        if (!video) {
            return NextResponse.json({ 
                error: "Video not found or you don't have permission to view it" 
            }, { status: 404 });
        }

        return NextResponse.json(video);
    } catch (error) {
        console.error("Error fetching video:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}