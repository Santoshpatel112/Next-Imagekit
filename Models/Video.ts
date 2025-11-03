import mongoose, { Schema, models, model } from "mongoose";

export  const VideoDemension={
    width:1080,
    height:1920,
} as const;

export interface IVideo{
    title:string;
    Description:string;
    videoUrl:string;
    thumbnailUrl:string;
    _id?:mongoose.Types.ObjectId;
    controls?:boolean;
    trinsformation?:{
        height:number;
        width:number;
        quility?:number;
    };
    createdAt?:Date;
    updatedAt?:Date;
}

const VideoSchema=new Schema<IVideo>({
    title:{
        type:String,
        required:true,
    },
    Description:{
        type:String,
        required:true,
    },
    videoUrl:{
        type:String,
        required:true,
    },
    thumbnailUrl:{
        type:String,
        required:true,
    },
    controls:{
        type:Boolean,
        default:true,
    },
    trinsformation:{
        height:{
            type:Number,
            required:true,
            Default:VideoDemension.height,
        },
        width:{
            type:Number,
            required:true,
            Default:VideoDemension.width,
        },
        quility:{
            type:Number,
            min:1,
            max:100,
        },
    }

},{
    timestamps:true,
});

const Video=models?.Video ||model<IVideo>("Video",VideoSchema);

export default Video;   