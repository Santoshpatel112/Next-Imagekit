'use client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import Navbar from '../Components/Navbar'
import AnimatedBackground from '../Components/AnimatedBackground'

interface Video {
  _id: string
  title: string
  description: string
  videoUrl: string
  thumbnailUrl?: string
  createdAt: string
  userId: {
    email: string
  }
}

export default function BrowseVideosPage() {
  const { data: session } = useSession()
  const router = useRouter()
  const [videos, setVideos] = useState<Video[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchAllVideos()
  }, [])

  const fetchAllVideos = async () => {
    try {
      const response = await fetch('/api/videos?type=all')
      if (response.ok) {
        const data = await response.json()
        setVideos(data)
      }
    } catch (error) {
      console.error('Error fetching videos:', error)
    } finally {
      setLoading(false)
    }
  }

  const handlePlayVideo = (videoUrl: string) => {
    if (!session) {
      // Redirect to login if not authenticated
      router.push('/login')
      return
    }
    // Open video in new tab or navigate to video page
    window.open(videoUrl, '_blank')
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
        <AnimatedBackground />
        <Navbar />
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-white text-xl">Loading videos...</div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <AnimatedBackground />
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">Browse Videos</h1>
        
        {videos.length === 0 ? (
          <div className="text-center text-white">
            <p className="text-xl">No videos available yet.</p>
            <p className="mt-4">Be the first to upload a video!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video) => (
              <div key={video._id} className="bg-white/10 backdrop-blur-md rounded-lg overflow-hidden hover:bg-white/20 transition-all duration-300">
                {/* Thumbnail */}
                <div className="relative aspect-video bg-gray-800">
                  {video.thumbnailUrl ? (
                    <img
                      src={video.thumbnailUrl}
                      alt={video.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-700 to-gray-800">
                      <div className="text-center text-gray-400">
                        <svg className="w-16 h-16 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2 6a2 2 0 012-2h6l2 2h6a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM5 8a1 1 0 011-1h1a1 1 0 010 2H6a1 1 0 01-1-1zm6 1a1 1 0 100 2h3a1 1 0 100-2H11z" />
                        </svg>
                        <p className="text-sm">No Thumbnail</p>
                      </div>
                    </div>
                  )}
                  {/* Play button overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <button
                      onClick={() => handlePlayVideo(video.videoUrl)}
                      className="bg-white/20 backdrop-blur-sm rounded-full p-4 hover:bg-white/30 transition-all duration-300"
                    >
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                      </svg>
                    </button>
                  </div>
                </div>
                
                {/* Video info */}
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-white mb-2 line-clamp-2">{video.title}</h3>
                  <p className="text-gray-300 mb-3 text-sm line-clamp-2">{video.description}</p>
                  <div className="flex justify-between items-center text-xs text-gray-400 mb-3">
                    <span>By: {video.userId.email}</span>
                    <span>{new Date(video.createdAt).toLocaleDateString()}</span>
                  </div>
                  <button
                    onClick={() => handlePlayVideo(video.videoUrl)}
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 px-4 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 text-sm font-medium"
                  >
                    Play Video
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}