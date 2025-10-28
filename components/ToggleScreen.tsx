'use client'

import { useState, useEffect } from 'react'

interface ToggleScreenProps {
  onMatchFound: () => void
}

export default function ToggleScreen({ onMatchFound }: ToggleScreenProps) {
  const [driverMode, setDriverMode] = useState(false)
  const [riderMode, setRiderMode] = useState(false)
  const [availableSeats, setAvailableSeats] = useState(3)
  const [corridor, setCorridor] = useState<string | null>(null)
  const [isMatching, setIsMatching] = useState(false)

  useEffect(() => {
    if (driverMode || riderMode) {
      // Simulate corridor detection
      setTimeout(() => {
        setCorridor('Tiranë → Durrës')
      }, 1500)

      // Simulate finding a match after 5 seconds
      setIsMatching(true)
      setTimeout(() => {
        setIsMatching(false)
        onMatchFound()
      }, 5000)
    } else {
      setCorridor(null)
      setIsMatching(false)
    }
  }, [driverMode, riderMode, onMatchFound])

  const handleDriverToggle = () => {
    if (!driverMode && riderMode) {
      setRiderMode(false)
    }
    setDriverMode(!driverMode)
  }

  const handleRiderToggle = () => {
    if (!riderMode && driverMode) {
      setDriverMode(false)
    }
    setRiderMode(!riderMode)
  }

  return (
    <div className="p-6 space-y-6">
      {/* Status Card */}
      {(driverMode || riderMode) && (
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-300 rounded-2xl p-4 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <div>
              <p className="font-semibold text-green-900">
                {driverMode ? '🚗 Driver Mode Active' : '👥 Rider Mode Active'}
              </p>
              {corridor && (
                <p className="text-sm text-green-700 mt-1">
                  Monitoring: <span className="font-medium">{corridor}</span>
                </p>
              )}
              {isMatching && (
                <p className="text-sm text-green-600 mt-1 animate-pulse">
                  🔍 Searching for matches...
                </p>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Driver Mode Toggle */}
      <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
              🚗 Driver Mode
            </h2>
            <p className="text-sm text-gray-600 mt-1">
              Earn from your daily commute
            </p>
          </div>
          <button
            onClick={handleDriverToggle}
            className={`relative w-16 h-9 rounded-full transition-colors ${
              driverMode ? 'bg-blue-600' : 'bg-gray-300'
            }`}
          >
            <div
              className={`absolute top-1 left-1 w-7 h-7 bg-white rounded-full shadow-md transition-transform ${
                driverMode ? 'translate-x-7' : 'translate-x-0'
              }`}
            ></div>
          </button>
        </div>

        {driverMode && (
          <div className="pt-4 border-t border-gray-200">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Available Seats
            </label>
            <div className="flex gap-2">
              {[1, 2, 3, 4].map((num) => (
                <button
                  key={num}
                  onClick={() => setAvailableSeats(num)}
                  className={`flex-1 py-3 rounded-xl font-semibold transition-all ${
                    availableSeats === num
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {num}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Rider Mode Toggle */}
      <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
              👥 Rider Mode
            </h2>
            <p className="text-sm text-gray-600 mt-1">
              Find rides to your destination
            </p>
          </div>
          <button
            onClick={handleRiderToggle}
            className={`relative w-16 h-9 rounded-full transition-colors ${
              riderMode ? 'bg-blue-600' : 'bg-gray-300'
            }`}
          >
            <div
              className={`absolute top-1 left-1 w-7 h-7 bg-white rounded-full shadow-md transition-transform ${
                riderMode ? 'translate-x-7' : 'translate-x-0'
              }`}
            ></div>
          </button>
        </div>
      </div>

      {/* Info Card */}
      {!driverMode && !riderMode && (
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
          <h3 className="font-semibold text-blue-900 mb-2">How Hitch Works</h3>
          <ul className="space-y-2 text-sm text-blue-800">
            <li className="flex items-start gap-2">
              <span>1️⃣</span>
              <span>Toggle Driver or Rider mode when you&apos;re ready to go</span>
            </li>
            <li className="flex items-start gap-2">
              <span>2️⃣</span>
              <span>AI detects your corridor (Tiranë-Durrës, Tiranë-Vlorë, etc.)</span>
            </li>
            <li className="flex items-start gap-2">
              <span>3️⃣</span>
              <span>Get matched automatically - accept via WhatsApp</span>
            </li>
            <li className="flex items-start gap-2">
              <span>4️⃣</span>
              <span>Complete trip & earn. Your location is deleted after 24h</span>
            </li>
          </ul>
        </div>
      )}
    </div>
  )
}
