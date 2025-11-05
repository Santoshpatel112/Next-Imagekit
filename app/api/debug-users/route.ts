import { connectDb } from "@/lib/Db";
import User from "@/Models/User";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        await connectDb();
        const users = await User.find({}, { email: 1, createdAt: 1 }); // Only return email and createdAt, not password
        return NextResponse.json({ 
            message: "Users fetched successfully",
            count: users.length,
            users: users,
            status: "success" 
        });
    } catch (error) {
        console.error("Error fetching users:", error);
        return NextResponse.json({ 
            message: "Error fetching users",
            error: error instanceof Error ? error.message : "Unknown error",
            status: "error" 
        }, { status: 500 });
    }
}