'use client'

import { useState } from 'react'

interface MatchNotificationProps {
  onClose: () => void
}

export default function MatchNotification({ onClose }: MatchNotificationProps) {
  const [accepted, setAccepted] = useState(false)

  const handleAccept = () => {
    setAccepted(true)
    setTimeout(() => {
      onClose()
    }, 3000)
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 animate-fadeIn">
      <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full overflow-hidden animate-slideUp">
        {!accepted ? (
          <>
            {/* Match Found */}
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white p-6 text-center">
              <div className="text-6xl mb-3">🎉</div>
              <h2 className="text-2xl font-bold mb-2">Match Found!</h2>
              <p className="text-green-100">You've been matched with a rider</p>
            </div>

            <div className="p-6 space-y-4">
              {/* Rider Info */}
              <div className="bg-gray-50 rounded-2xl p-4">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                    EK
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Elena Krasniqi</h3>
                    <p className="text-sm text-gray-600">Rider</p>
                  </div>
                </div>

                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <span className="text-gray-500">🛣️ Route:</span>
                    <span className="font-medium">Tiranë → Durrës</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-gray-500">⏰ Departure:</span>
                    <span className="font-medium">In 5 minutes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-gray-500">💰 Fare:</span>
                    <span className="font-medium">400 Lekë</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-gray-500">📍 Pickup:</span>
                    <span className="font-medium">0.3 km detour</span>
                  </div>
                </div>
              </div>

              {/* Expiry Warning */}
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 text-center">
                <p className="text-sm text-amber-800">
                  ⏱️ This match expires in <span className="font-bold">5 minutes</span>
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <button
                  onClick={onClose}
                  className="flex-1 py-4 rounded-2xl font-semibold text-gray-700 bg-gray-200 hover:bg-gray-300 transition-colors"
                >
                  Decline
                </button>
                <button
                  onClick={handleAccept}
                  className="flex-1 py-4 rounded-2xl font-semibold text-white bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 shadow-lg transition-all"
                >
                  Accept ✓
                </button>
              </div>

              {/* WhatsApp Info */}
              <p className="text-xs text-center text-gray-500">
                After accepting, we'll send ride details via WhatsApp
              </p>
            </div>
          </>
        ) : (
          <>
            {/* Accepted State */}
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white p-6 text-center">
              <div className="text-6xl mb-3">✅</div>
              <h2 className="text-2xl font-bold mb-2">Match Accepted!</h2>
            </div>

            <div className="p-6 space-y-4">
              <div className="bg-green-50 border-2 border-green-300 rounded-2xl p-4 text-center">
                <p className="text-green-900 font-semibold mb-2">
                  📱 WhatsApp message sent
                </p>
                <p className="text-sm text-green-700">
                  Check WhatsApp for Elena's contact and ride details
                </p>
              </div>

              <div className="space-y-2 text-sm text-gray-600">
                <p className="flex items-center justify-between">
                  <span>Trip confirmed</span>
                  <span className="text-green-600 font-medium">✓</span>
                </p>
                <p className="flex items-center justify-between">
                  <span>Rider notified</span>
                  <span className="text-green-600 font-medium">✓</span>
                </p>
                <p className="flex items-center justify-between">
                  <span>WhatsApp sent</span>
                  <span className="text-green-600 font-medium">✓</span>
                </p>
              </div>

              <button
                onClick={onClose}
                className="w-full py-3 rounded-2xl font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-colors"
              >
                Got it
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
