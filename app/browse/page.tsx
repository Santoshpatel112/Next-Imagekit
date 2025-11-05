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
              <div key={video._id} className="bg-white/10 backdrop-blur-md rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
                <h3 className="text-xl font-semibold text-white mb-2">{video.title}</h3>
                <p className="text-gray-300 mb-4">{video.description}</p>
                <p className="text-sm text-gray-400 mb-4">
                  Uploaded by: {video.userId.email}
                </p>
                <p className="text-sm text-gray-400 mb-4">
                  {new Date(video.createdAt).toLocaleDateString()}
                </p>
                <button
                  onClick={() => handlePlayVideo(video.videoUrl)}
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 px-4 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
                >
                  Play Video
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}