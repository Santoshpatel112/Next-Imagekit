import { NextResponse } from "next/server";

export async function GET() {
    try {
        // Check if all required environment variables are set
        const publicKey = process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY;
        const privateKey = process.env.IMAGEKIT_PRIVATE_KEY;
        const urlEndpoint = process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT;

        const missing = [];
        if (!publicKey) missing.push('NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY');
        if (!privateKey) missing.push('IMAGEKIT_PRIVATE_KEY');
        if (!urlEndpoint) missing.push('NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT');

        if (missing.length > 0) {
            return NextResponse.json({
                status: "error",
                message: "Missing ImageKit environment variables",
                missing: missing,
                current: {
                    publicKey: publicKey ? `${publicKey.substring(0, 10)}...` : 'NOT SET',
                    privateKey: privateKey ? `${privateKey.substring(0, 10)}...` : 'NOT SET',
                    urlEndpoint: urlEndpoint || 'NOT SET'
                }
            }, { status: 500 });
        }

        // Test the auth endpoint
        const authResponse = await fetch(`${process.env.NEXTAUTH_URL}/api/auth/imagekit-auth`);
        const authData = await authResponse.json();

        return NextResponse.json({
            status: "success",
            message: "ImageKit configuration looks good!",
            config: {
                publicKey: `${publicKey.substring(0, 10)}...`,
                urlEndpoint: urlEndpoint,
                authEndpointWorking: authResponse.ok
            },
            authData: authResponse.ok ? authData : { error: "Auth endpoint failed" }
        });

    } catch (error) {
        return NextResponse.json({
            status: "error",
            message: "Error testing ImageKit configuration",
            error: error instanceof Error ? error.message : "Unknown error"
        }, { status: 500 });
    }
}