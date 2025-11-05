import { connectDb } from "@/lib/Db";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        await connectDb();
        return NextResponse.json({ 
            message: "Database connected successfully!",
            status: "success" 
        });
    } catch (error) {
        console.error("Database connection error:", error);
        return NextResponse.json({ 
            message: "Database connection failed",
            error: error instanceof Error ? error.message : "Unknown error",
            status: "error" 
        }, { status: 500 });
    }
}