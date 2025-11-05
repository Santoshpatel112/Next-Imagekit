'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import Navbar from '../Components/Navbar'
import FileUpload from '../Components/Fileupload'
import AnimatedBackground from '../Components/AnimatedBackground'

export default function UploadPage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [videoUrl, setVideoUrl] = useState('')
  const [thumbnailUrl, setThumbnailUrl] = useState('')
  const [uploadProgress, setUploadProgress] = useState(0)
  const [isUploading, setIsUploading] = useState(false)
  const [uploadComplete, setUploadComplete] = useState(false)

  if (status === 'loading') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navbar />
        <div className="flex items-center justify-center h-[calc(100vh-4rem)]">
          <div className="text-white text-xl">Loading...</div>
        </div>
      </div>
    )
  }

  if (!session) {
    router.push('/login')
    return null
  }

  const handleVideoUpload = (response: any) => {
    setVideoUrl(response.url)
    setIsUploading(false)
    console.log('Video uploaded:', response)
  }

  const handleThumbnailUpload = (response: any) => {
    setThumbnailUrl(response.url)
    console.log('Thumbnail uploaded:', response)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!videoUrl) {
      alert('Please upload a video first')
      return
    }

    try {
      const response = await fetch('/api/videos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title,
          description,
          videoUrl,
          thumbnailUrl,
        }),
      })

      if (response.ok) {
        setUploadComplete(true)
        setTimeout(() => {
          router.push('/videos')
        }, 2000)
      } else {
        alert('Failed to save video')
      }
    } catch (error) {
      console.error('Error saving video:', error)
      alert('An error occurred')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <AnimatedBackground />
      <Navbar />

      <div className="relative max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-white/20">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl mb-4 shadow-lg">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-white mb-2">Upload Your Video</h1>
            <p className="text-gray-300">Share your content with the world</p>
          </div>

          {uploadComplete ? (
            <div className="text-center py-12">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-green-500/20 rounded-full mb-4">
                <svg className="w-10 h-10 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-white mb-2">Upload Complete!</h2>
              <p className="text-gray-300">Redirecting to your videos...</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Video Upload */}
              <div className="group">
                <label className="block text-sm font-medium text-gray-200 mb-3">
                  Video File
                </label>
                <div className="relative">
                  <div className="border-2 border-dashed border-white/30 rounded-xl p-8 text-center hover:border-purple-500 transition-all bg-white/5 backdrop-blur-sm">
                    {!videoUrl ? (
                      <>
                        <svg className="mx-auto h-12 w-12 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                        <FileUpload
                          onSuccess={handleVideoUpload}
                          onProgress={(progress) => {
                            setUploadProgress(progress)
                            setIsUploading(true)
                          }}
                          filetypes="video"
                        />
                        {isUploading && (
                          <div className="mt-4">
                            <div className="w-full bg-white/20 rounded-full h-2 overflow-hidden">
                              <div 
                                className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 transition-all duration-300"
                                style={{ width: `${uploadProgress}%` }}
                              ></div>
                            </div>
                            <p className="text-gray-300 text-sm mt-2">{Math.round(uploadProgress)}% uploaded</p>
                          </div>
                        )}
                      </>
                    ) : (
                      <div className="flex items-center justify-center gap-3 text-green-400">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="font-medium">Video uploaded successfully!</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Title */}
              <div className="group">
                <label htmlFor="title" className="block text-sm font-medium text-gray-200 mb-2">
                  Video Title
                </label>
                <input
                  type="text"
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Enter a catchy title"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-gray-400 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all backdrop-blur-sm"
                  required
                />
              </div>

              {/* Description */}
              <div className="group">
                <label htmlFor="description" className="block text-sm font-medium text-gray-200 mb-2">
                  Description
                </label>
                <textarea
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Tell viewers about your video"
                  rows={4}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-gray-400 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all backdrop-blur-sm resize-none"
                  required
                />
              </div>

              {/* Thumbnail Upload */}
              <div className="group">
                <label className="block text-sm font-medium text-gray-200 mb-3">
                  Thumbnail (Optional)
                </label>
                <div className="border-2 border-dashed border-white/30 rounded-xl p-6 text-center hover:border-purple-500 transition-all bg-white/5 backdrop-blur-sm">
                  {!thumbnailUrl ? (
                    <>
                      <svg className="mx-auto h-10 w-10 text-gray-400 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <FileUpload
                        onSuccess={handleThumbnailUpload}
                        filetypes="image"
                      />
                    </>
                  ) : (
                    <div className="flex items-center justify-center gap-3 text-green-400">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="font-medium">Thumbnail uploaded!</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={!videoUrl || isUploading}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Publish Video
              </button>
            </form>
          )}
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  )
}
