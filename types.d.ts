import {Connections} from "mongoose";

declare global{
    var mongoose:{
        cnn :Connections |null;
        promise:Promise<Connections> |null
    }
}

export {};
