import { withAuth } from "next-auth/middleware"
import {NextResponse} from  "next/server";
export default withAuth(
    function middleware(){
        return NextResponse.next();
    },
    // Configure the middleware to handle authorization
    {
    callbacks:{
   authorized({ req , token }) {
     const { pathname } = req.nextUrl;
     // Allow access if user is authenticated
     if (token) {
       return true;
     }
     // Redirect to login if trying to access a protected route
     if (pathname === '/login'|| pathname.startsWith('/api/auth') || pathname === '/register'){
       return true;
     }
     if(pathname ==='/' || pathname.startsWith('/api/video')){
        return true;
     }
     // Allow access to login page
     return true;

   } 
 }
}
)

export const config={
    matcher:[
        "/((?!api|_next/static|_next/image|favicon.ico|public/).*)"
    ]
}