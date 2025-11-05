import mongoose, { Schema, models, model } from "mongoose";

// Define the Video interface
export interface IVideo {
    title: string;
    description: string;
    videoUrl: string;
    thumbnailUrl?: string;
    userId: mongoose.Types.ObjectId;
    _id?: mongoose.Types.ObjectId;
    createdAt?: Date;
    updatedAt?: Date;
}

const VideoSchema = new Schema<IVideo>({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
    videoUrl: {
        type: String,
        required: true,
    },
    thumbnailUrl: {
        type: String,
        required: false,
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    }
}, {
    timestamps: true,
});

const Video = models?.Video || model<IVideo>("Video", VideoSchema);

export default Video;