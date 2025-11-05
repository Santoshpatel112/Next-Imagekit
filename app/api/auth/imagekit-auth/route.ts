import { getUploadAuthParams } from "@imagekit/next/server"
import { NextResponse } from "next/server"

export async function GET() {
   try {
     const authParams = getUploadAuthParams({
         privateKey: process.env.IMAGEKIT_PRIVATE_KEY as string,
         publicKey: process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY as string,   
     })
 
     return NextResponse.json({
       token: authParams.token,
       signature: authParams.signature,
       expire: authParams.expire,
       publicKey: process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY
     })
   } catch (error) {
     console.error('ImageKit auth error:', error)
     return NextResponse.json({ 
       error: 'Failed to generate authentication parameters',
       details: error instanceof Error ? error.message : 'Unknown error'
     }, { status: 500 })
   }
}