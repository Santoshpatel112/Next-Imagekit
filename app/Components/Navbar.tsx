'use client'
import { signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function Navbar() {
  const { data: session } = useSession()
  const router = useRouter()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-white/10 backdrop-blur-xl border-b border-white/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => router.push('/')}>
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg transform transition-transform hover:rotate-12 duration-300">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <span className="text-xl font-bold text-white">VideoHub</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <button 
              onClick={() => router.push('/')}
              className="text-gray-200 hover:text-white transition-colors font-medium"
            >
              Home
            </button>
            <button 
              onClick={() => router.push('/upload')}
              className="text-gray-200 hover:text-white transition-colors font-medium"
            >
              Upload
            </button>
            <button 
              onClick={() => router.push('/videos')}
              className="text-gray-200 hover:text-white transition-colors font-medium"
            >
              My Videos
            </button>
          </div>

          {/* User Menu */}
          <div className="hidden md:flex items-center gap-4">
            {session ? (
              <>
                <div className="text-gray-200 text-sm">
                  {session.user?.email}
                </div>
                <button
                  onClick={() => signOut()}
                  className="px-4 py-2 bg-red-500/20 text-red-300 rounded-lg hover:bg-red-500/30 transition-all font-medium border border-red-500/30"
                >
                  Sign Out
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => router.push('/login')}
                  className="px-4 py-2 text-gray-200 hover:text-white transition-colors font-medium"
                >
                  Login
                </button>
                <button
                  onClick={() => router.push('/register')}
                  className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all font-medium shadow-lg"
                >
                  Sign Up
                </button>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white p-2"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-3 border-t border-white/20">
            <button 
              onClick={() => { router.push('/'); setIsMenuOpen(false); }}
              className="block w-full text-left px-4 py-2 text-gray-200 hover:bg-white/10 rounded-lg transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => { router.push('/upload'); setIsMenuOpen(false); }}
              className="block w-full text-left px-4 py-2 text-gray-200 hover:bg-white/10 rounded-lg transition-colors"
            >
              Upload
            </button>
            <button 
              onClick={() => { router.push('/videos'); setIsMenuOpen(false); }}
              className="block w-full text-left px-4 py-2 text-gray-200 hover:bg-white/10 rounded-lg transition-colors"
            >
              My Videos
            </button>
            {session ? (
              <>
                <div className="px-4 py-2 text-gray-300 text-sm">
                  {session.user?.email}
                </div>
                <button
                  onClick={() => signOut()}
                  className="block w-full text-left px-4 py-2 bg-red-500/20 text-red-300 rounded-lg hover:bg-red-500/30 transition-all"
                >
                  Sign Out
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => { router.push('/login'); setIsMenuOpen(false); }}
                  className="block w-full text-left px-4 py-2 text-gray-200 hover:bg-white/10 rounded-lg transition-colors"
                >
                  Login
                </button>
                <button
                  onClick={() => { router.push('/register'); setIsMenuOpen(false); }}
                  className="block w-full text-left px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all"
                >
                  Sign Up
                </button>
              </>
            )}
          </div>
        )}
      </div>
    </nav>
  )
}
