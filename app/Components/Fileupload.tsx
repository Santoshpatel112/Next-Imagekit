"use client"

import {
    ImageKitAbortError,
    ImageKitInvalidRequestError,
    ImageKitServerError,
    ImageKitUploadNetworkError,
    upload,
} from "@imagekit/next";
import { useState } from "react";

interface FileUploadprpos{
    onSuccess:(response:any)=>void;
    onProgress?:(progress:number)=>void;
    filetypes?:"image"| "video" | "audio"|string;
}

const FileUpload = ({
    onSuccess,
    onProgress,
    filetypes
}:FileUploadprpos) => {
    const [uploading, setUploading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [progress, setProgress] = useState(0);

    const validatefile = (file: File) => {
        // File type validation
        if(filetypes === "video"){
            if(!file.type.startsWith("video/")){
                setError("Invalid file type. Please upload a video file.");
                return false;
            }
        } else if(filetypes === "image"){
            if(!file.type.startsWith("image/")){
                setError("Invalid file type. Please upload an image file.");
                return false;
            }
        }

        // File size validation based on type
        const maxSizes = {
            video: 500 * 1024 * 1024,    // 500MB for videos
            image: 10 * 1024 * 1024,     // 10MB for images/thumbnails
            default: 100 * 1024 * 1024   // 100MB for other files
        };

        let maxSize = maxSizes.default;
        let sizeLabel = "100MB";

        if(filetypes === "video"){
            maxSize = maxSizes.video;
            sizeLabel = "500MB";
        } else if(filetypes === "image"){
            maxSize = maxSizes.image;
            sizeLabel = "10MB";
        }

        if(file.size > maxSize){
            setError(`File size exceeds the ${sizeLabel} limit. Your file is ${(file.size / (1024 * 1024)).toFixed(1)}MB.`);
            return false;
        }

        return true;
    }

    const handlechange = async(e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if(!file) return;
        
        const isValid = validatefile(file);
        if(!isValid) return;
        
        setUploading(true);
        setError(null);
        setProgress(0);

        try {
            const authres = await fetch('/api/auth/imagekit-auth');
            const authdata = await authres.json();
            const response = await upload({
                file,
                expire: authdata.expire,
                token: authdata.token,
                signature: authdata.signature,
                publicKey: process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY!,
                fileName: file.name, 
                onProgress: (event) => {
                    if(event.lengthComputable){
                        const percent = (event.loaded / event.total) * 100;
                        setProgress(Math.round(percent));
                        if(onProgress){
                            onProgress(Math.round(percent));
                        }
                    }
                },
            });
            onSuccess(response);
            setUploading(false);
        } catch (error) {
            console.error("Upload failed:", error);
            if(
                error instanceof ImageKitAbortError ||
                error instanceof ImageKitInvalidRequestError ||
                error instanceof ImageKitServerError ||
                error instanceof ImageKitUploadNetworkError
            ){
                setError(error.message);
            } else {
                setError("An unexpected error occurred during upload.");
            }
            setUploading(false);
        }
    }

    return (
        <div className="w-full">
            <label className="cursor-pointer block">
                <input 
                    type="file" 
                    accept={
                        filetypes === "image" ? "image/*" : 
                        filetypes === "video" ? "video/*" : 
                        filetypes === "audio" ? "audio/*" : 
                        "*/*"
                    }
                    onChange={handlechange}
                    className="hidden"
                    disabled={uploading}
                />
                {!uploading && (
                    <div className="text-center">
                        <p className="text-gray-300 font-medium mb-2">
                            {filetypes === "video" ? "Click to select video" : 
                             filetypes === "image" ? "Click to select image" : 
                             "Click to select file"}
                        </p>
                        <p className="text-gray-400 text-sm">
                            {filetypes === "video" ? "MP4, WebM, or OGV (Max 500MB)" : 
                             filetypes === "image" ? "PNG, JPG, or GIF (Max 10MB)" : 
                             "Any file type (Max 100MB)"}
                        </p>
                    </div>
                )}
            </label>
            
            {uploading && (
                <div className="mt-4 space-y-2">
                    <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-300 font-medium">Uploading...</span>
                        <span className="text-purple-400 font-bold">{progress}%</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-2 overflow-hidden">
                        <div 
                            className="bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 h-2 transition-all duration-300 animate-pulse"
                            style={{ width: `${progress}%` }}
                        ></div>
                    </div>
                </div>
            )}
            
            {error && (
                <div className="mt-4 p-3 bg-red-500/20 border border-red-500/30 rounded-lg">
                    <p className="text-red-300 text-sm flex items-center gap-2">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {error}
                    </p>
                </div>
            )}
        </div>
    );
};

export default FileUpload;
