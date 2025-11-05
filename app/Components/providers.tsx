import React from "react";
import {SessionProvider} from "next-auth/react";




export default function Providers({childern}:{childern:React.ReactNode}){
    return <SessionProvider>{childern}</SessionProvider>;
}

