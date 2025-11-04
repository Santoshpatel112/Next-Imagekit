import mongoose from "mongoose";

const MONGO_URl=process.env.MONGO_URL;
if(!MONGO_URl) throw new Error("MONGO_URL is not defined in environment variables");

let cashed=global.mongoose
if(!cashed){
    cashed={cnn:null,promise:null};
    global.mongoose= cashed={cnn:null,promise:null};
}
export async function connectDb(){
    const opt={
        bufferCommands:true,
        useNewUrlParser:true,
        maxpullSize:10,
        wtimeoutMS:2500,
        useUnifiedTopology:true,
    };
     if(cashed.cnn){ return chashed.cnn;
     };
     if(!cashed.promise){
        mongoose.connect(
            MONGO_URl,
            opt
        ).then(()=>mongoose.connections[0]);
     }
     try {
        await cashed.promise;
        return cashed.cnn;
     } catch (error) {
        cashed.promise=null;
        throw error;    
     }
     return cashed.cnn;
}
