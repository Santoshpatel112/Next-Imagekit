import { getUploadAuthParams } from "@imagekit/next/server"
import { NextResponse } from "next/server"

export async function GET() {
    try {
        // Check environment variables
        const publicKey = process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY;
        const privateKey = process.env.IMAGEKIT_PRIVATE_KEY;
        const urlEndpoint = process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT;

        console.log('Environment variables check:');
        console.log('Public Key:', publicKey ? `${publicKey.substring(0, 15)}...` : 'NOT SET');
        console.log('Private Key:', privateKey ? `${privateKey.substring(0, 15)}...` : 'NOT SET');
        console.log('URL Endpoint:', urlEndpoint);

        if (!publicKey || !privateKey || !urlEndpoint) {
            return NextResponse.json({
                status: "error",
                message: "Missing ImageKit environment variables",
                missing: {
                    publicKey: !publicKey,
                    privateKey: !privateKey,
                    urlEndpoint: !urlEndpoint
                }
            }, { status: 500 });
        }

        // Try to generate auth parameters
        const authParams = getUploadAuthParams({
            privateKey: privateKey,
            publicKey: publicKey,
        });

        console.log('Generated auth params:', {
            token: authParams.token ? 'Generated' : 'Missing',
            signature: authParams.signature ? 'Generated' : 'Missing',
            expire: authParams.expire
        });

        return NextResponse.json({
            status: "success",
            message: "ImageKit authentication working correctly!",
            authParams: {
                token: authParams.token,
                signature: authParams.signature,
                expire: authParams.expire,
                publicKey: publicKey
            },
            config: {
                publicKey: `${publicKey.substring(0, 15)}...`,
                privateKey: `${privateKey.substring(0, 15)}...`,
                urlEndpoint: urlEndpoint
            }
        });

    } catch (error) {
        console.error('ImageKit auth test error:', error);
        return NextResponse.json({
            status: "error",
            message: "Error generating ImageKit authentication",
            error: error instanceof Error ? error.message : "Unknown error",
            stack: error instanceof Error ? error.stack : undefined
        }, { status: 500 });
    }
}