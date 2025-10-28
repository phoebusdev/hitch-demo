'use client'

import { useState } from 'react'
import ToggleScreen from '@/components/ToggleScreen'
import MatchNotification from '@/components/MatchNotification'
import TripHistory from '@/components/TripHistory'
import Link from 'next/link'

export default function Demo() {
  const [activeTab, setActiveTab] = useState<'home' | 'history'>('home')
  const [showMatch, setShowMatch] = useState(false)

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Back to Landing */}
      <Link
        href="/"
        className="fixed top-4 left-4 z-50 bg-white/90 backdrop-blur-sm hover:bg-white text-blue-600 px-4 py-2 rounded-full shadow-lg transition-all hover:shadow-xl flex items-center gap-2 text-sm font-semibold"
      >
        ← Back to Home
      </Link>

      {/* Mobile Container */}
      <div className="max-w-md mx-auto min-h-screen bg-white shadow-2xl">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6 shadow-lg">
          <h1 className="text-3xl font-bold mb-1">Hitch</h1>
          <p className="text-blue-100 text-sm">AI-first rideshare for Albania</p>
        </div>

        {/* Content */}
        <div className="pb-20">
          {activeTab === 'home' && (
            <ToggleScreen onMatchFound={() => setShowMatch(true)} />
          )}
          {activeTab === 'history' && <TripHistory />}
        </div>

        {/* Match Notification Modal */}
        {showMatch && (
          <MatchNotification onClose={() => setShowMatch(false)} />
        )}

        {/* Bottom Navigation */}
        <nav className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white border-t border-gray-200 shadow-lg">
          <div className="flex">
            <button
              onClick={() => setActiveTab('home')}
              className={`flex-1 py-4 text-center transition-colors ${
                activeTab === 'home'
                  ? 'text-blue-600 font-semibold'
                  : 'text-gray-500'
              }`}
            >
              <div className="text-2xl mb-1">🏠</div>
              <div className="text-xs">Home</div>
            </button>
            <button
              onClick={() => setActiveTab('history')}
              className={`flex-1 py-4 text-center transition-colors ${
                activeTab === 'history'
                  ? 'text-blue-600 font-semibold'
                  : 'text-gray-500'
              }`}
            >
              <div className="text-2xl mb-1">📊</div>
              <div className="text-xs">History</div>
            </button>
          </div>
        </nav>
      </div>

      {/* Desktop Notice */}
      <div className="hidden md:block fixed top-4 right-4 bg-blue-50 border border-blue-200 rounded-lg p-4 max-w-xs">
        <p className="text-sm text-blue-800">
          <span className="font-semibold">📱 Best viewed on mobile</span>
          <br />
          This is a mobile app demo. Resize your browser or view on a phone for the best experience.
        </p>
      </div>
    </main>
  )
}
