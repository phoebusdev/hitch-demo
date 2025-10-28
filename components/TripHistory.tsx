'use client'

export default function TripHistory() {
  const monthlyEarnings = 12500
  const completedTrips = 8

  const trips = [
    {
      id: 1,
      date: '2025-10-27',
      time: '08:15 AM',
      corridor: 'Tiranë → Durrës',
      riders: ['Elena K.', 'Besar M.'],
      fare: 800,
      status: 'completed',
    },
    {
      id: 2,
      date: '2025-10-26',
      time: '05:30 PM',
      corridor: 'Durrës → Tiranë',
      riders: ['Anjeza B.'],
      fare: 400,
      status: 'completed',
    },
    {
      id: 3,
      date: '2025-10-25',
      time: '08:00 AM',
      corridor: 'Tiranë → Durrës',
      riders: ['Fatmir G.', 'Erjona S.', 'Denis P.'],
      fare: 1200,
      status: 'completed',
    },
    {
      id: 4,
      date: '2025-10-24',
      time: '06:00 PM',
      corridor: 'Durrës → Tiranë',
      riders: ['Kledi R.', 'Miranda T.'],
      fare: 800,
      status: 'completed',
    },
    {
      id: 5,
      date: '2025-10-23',
      time: '07:45 AM',
      corridor: 'Tiranë → Durrës',
      riders: ['Aurela M.'],
      fare: 400,
      status: 'completed',
    },
  ]

  return (
    <div className="p-6 space-y-6">
      {/* Earnings Summary */}
      <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-3xl p-6 shadow-lg">
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-blue-200 text-sm mb-1">This Month's Earnings</p>
            <p className="text-4xl font-bold">{monthlyEarnings.toLocaleString()} L</p>
          </div>
          <div className="text-6xl">💰</div>
        </div>

        <div className="grid grid-cols-2 gap-4 pt-4 border-t border-blue-400">
          <div>
            <p className="text-blue-200 text-sm">Completed Trips</p>
            <p className="text-2xl font-bold">{completedTrips}</p>
          </div>
          <div>
            <p className="text-blue-200 text-sm">Avg per Trip</p>
            <p className="text-2xl font-bold">
              {Math.round(monthlyEarnings / completedTrips)} L
            </p>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-4 text-center">
          <p className="text-3xl font-bold text-green-700">98%</p>
          <p className="text-sm text-green-600 mt-1">Completion Rate</p>
        </div>
        <div className="bg-purple-50 border-2 border-purple-200 rounded-2xl p-4 text-center">
          <p className="text-3xl font-bold text-purple-700">4.9</p>
          <p className="text-sm text-purple-600 mt-1">Average Rating</p>
        </div>
      </div>

      {/* Recent Trips */}
      <div>
        <h2 className="text-xl font-bold text-gray-900 mb-4">Recent Trips</h2>
        <div className="space-y-3">
          {trips.map((trip) => (
            <div
              key={trip.id}
              className="bg-white border-2 border-gray-200 rounded-2xl p-4 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <p className="font-semibold text-gray-900">{trip.corridor}</p>
                  <p className="text-sm text-gray-500">
                    {new Date(trip.date).toLocaleDateString('en-GB', {
                      day: 'numeric',
                      month: 'short',
                    })}{' '}
                    · {trip.time}
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-green-600 text-lg">
                    {trip.fare} L
                  </p>
                  <span className="inline-block mt-1 px-2 py-1 text-xs font-medium text-green-700 bg-green-100 rounded-full">
                    ✓ Completed
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span>👥</span>
                <span>{trip.riders.join(', ')}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Privacy Notice */}
      <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
        <div className="flex items-start gap-3">
          <span className="text-2xl">🔒</span>
          <div>
            <p className="font-semibold text-gray-900 text-sm mb-1">
              Privacy Protected
            </p>
            <p className="text-xs text-gray-600">
              Your location history is automatically deleted after 24 hours. Only
              aggregated trip statistics are stored.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
