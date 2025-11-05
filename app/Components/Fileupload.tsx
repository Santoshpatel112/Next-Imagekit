"use client"; // This component must be a client component

import {
  ImageKitAbortError,
  ImageKitInvalidRequestError,
  ImageKitServerError,
  ImageKitUploadNetworkError,
  upload,
} from "@imagekit/next";
import { useState } from "react";

interface FileUploadprpos {
  onSuccess: (response: any) => void;
  onProgress?: (progress: number) => void;
  filetypes?: "image" | "video" | "audio" | string;
}

const FileUpload = ({ onSuccess, onProgress, filetypes }: FileUploadprpos) => {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [progress, setProgress] = useState(0);
  // optional vadidation
  const validatefile = (file: File) => {
    if (filetypes === "video") {
      if (!file.type.startsWith("video/")) {
        setError("Invalid file type. Please upload a video file.");
        return false;
      }
    }
    if (file.size > 100 * 1024 * 1024) {
      setError("File size exceeds the 100MB limit.");
      return false;
    }
    return true;
  };

  const handlechange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const isValid = validatefile(file);
    if (!isValid) return;
    setUploading(true);
    setError(null);

    try {
      const authres = await fetch("/api/auth/imagekit-auth");
      const authdata = await authres.json();
      const response = await upload({
        file,
        expire: authdata.expire,
        token: authdata.token,
        signature: authdata.signature,
        publicKey: process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY!,
        fileName: file.name,
        onProgress: (event) => {
          if (event.lengthComputable && onProgress) {
            const percent = (event.loaded / event.total) * 100;
            onProgress(Math.round(percent));
          }
          setProgress((event.loaded / event.total) * 100);
        },
      });
      onSuccess(response);
      setUploading(false);
    } catch (error) {
      console.error("Upload failed:", error);
      if (
        error instanceof ImageKitAbortError ||
        error instanceof ImageKitInvalidRequestError ||
        error instanceof ImageKitServerError ||
        error instanceof ImageKitUploadNetworkError
      ) {
        setError(error.message);
      } else {
        setError("An unexpected error occurred during upload.");
      }

      setUploading(false);
    }
  };

  return (
    <>
      <input
        type="file"
        accept={
          filetypes === "image"
            ? "image/*"
            : filetypes === "video"
            ? "video/*"
            : filetypes === "audio"
            ? "audio/*"
            : "*/*"
        }
        onChange={handlechange}
      />
      {uploading && <p>Uploading... {Math.round(progress)}%</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </>
  );
};

export default FileUpload;
