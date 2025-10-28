'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Landing() {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null)

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE0YzAgNy43MzItNi4yNjggMTQtMTQgMTRzLTE0LTYuMjY4LTE0LTE0UzE0LjI2OCAwIDIyIDBzMTQgNi4yNjggMTQgMTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30"></div>

        <div className="relative max-w-6xl mx-auto px-6 py-20 md:py-32">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fadeIn">
              Hitch
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-4 animate-fadeIn" style={{animationDelay: '0.1s'}}>
              Transportation without central planning
            </p>
            <p className="text-lg md:text-xl text-blue-200 max-w-3xl mx-auto animate-fadeIn" style={{animationDelay: '0.2s'}}>
              AI observes how people naturally move—the &ldquo;cowpaths&rdquo; of daily life—and builds intelligent, decentralized ridesharing that works for everyone.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slideUp" style={{animationDelay: '0.3s'}}>
            <Link
              href="/demo"
              className="group bg-white text-blue-700 px-8 py-4 rounded-full font-bold text-lg shadow-2xl hover:shadow-3xl transition-all hover:scale-105 flex items-center gap-2"
            >
              Try the Demo
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
            <a
              href="#how-it-works"
              className="bg-blue-500/20 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-500/30 transition-all"
            >
              Learn How It Works
            </a>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              The Problem with Traditional Ridesharing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Existing platforms force artificial friction: browsing, negotiating, rating. They impose central planning on organic human movement.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-red-50 border-2 border-red-200 rounded-3xl p-8 text-center">
              <div className="text-5xl mb-4">🔍</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Active Searching</h3>
              <p className="text-gray-700">Users must constantly browse, compare options, and negotiate prices</p>
            </div>
            <div className="bg-red-50 border-2 border-red-200 rounded-3xl p-8 text-center">
              <div className="text-5xl mb-4">⭐</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Rating Anxiety</h3>
              <p className="text-gray-700">Star ratings create social pressure and punish edge cases unfairly</p>
            </div>
            <div className="bg-red-50 border-2 border-red-200 rounded-3xl p-8 text-center">
              <div className="text-5xl mb-4">🏢</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Central Control</h3>
              <p className="text-gray-700">Platforms dictate routes and pricing instead of learning from behavior</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 px-6 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              The Cowpath Philosophy
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Instead of forcing people into predefined systems, Hitch observes natural movement patterns—the &ldquo;cowpaths&rdquo; people create—and builds intelligence around them.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <div className="bg-gradient-to-br from-emerald-500 to-emerald-700 text-white rounded-3xl p-8 shadow-2xl">
                <div className="text-6xl mb-4">🛤️</div>
                <h3 className="text-3xl font-bold mb-4">What&apos;s a Cowpath?</h3>
                <p className="text-lg text-emerald-100 leading-relaxed">
                  In urban planning, a &ldquo;cowpath&rdquo; is the worn trail that appears when people naturally choose the most efficient route—not the one someone planned for them.
                </p>
                <div className="mt-6 pt-6 border-t border-emerald-400/30">
                  <p className="text-emerald-50 italic">
                    &ldquo;The most sophisticated design is the one that follows organic behavior, not the one that tries to control it.&rdquo;
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                  1
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">AI Observes Movement</h4>
                  <p className="text-gray-600">From your first trip, Hitch learns your routes and patterns. No manual input needed.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                  2
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Detects Corridors</h4>
                  <p className="text-gray-600">The system identifies common routes (Tiranë → Durrës, Tiranë → Vlorë) where matching works best.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                  3
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Intelligent Matching</h4>
                  <p className="text-gray-600">When compatible riders and drivers are detected, you get a notification. Accept or decline—that&apos;s it.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                  4
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Zero Friction</h4>
                  <p className="text-gray-600">No browsing, no negotiating, no ratings. Just toggle your mode and let AI handle the rest.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Built for Real People, Not Platforms
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every feature is designed to reduce friction and respect organic human behavior.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '🔘',
                title: 'One-Toggle Simplicity',
                description: 'Turn Driver Mode or Rider Mode ON. That\'s it. No browsing, no searching, no endless options.',
                color: 'blue'
              },
              {
                icon: '🧠',
                title: 'AI Pattern Learning',
                description: 'From your first trip onwards, Hitch learns your routes and timing. Zero manual configuration.',
                color: 'emerald'
              },
              {
                icon: '💰',
                title: 'Transparent Pricing',
                description: 'Formula-based: (fuel cost ÷ passengers) + 30% driver premium. No surge pricing, no surprises.',
                color: 'blue'
              },
              {
                icon: '🔒',
                title: 'Privacy-First Design',
                description: 'Location data deleted within 24 hours. Toggle OFF means zero tracking—period.',
                color: 'emerald'
              },
              {
                icon: '💬',
                title: 'WhatsApp Coordination',
                description: 'Trip coordination happens in an app you already use and trust. No new messaging system to learn.',
                color: 'blue'
              },
              {
                icon: '📊',
                title: 'Completion Tracking',
                description: 'Simple percentage system (98% completion) instead of star ratings. Edge cases don\'t ruin your reputation.',
                color: 'emerald'
              }
            ].map((feature, i) => (
              <div
                key={i}
                onMouseEnter={() => setHoveredFeature(i)}
                onMouseLeave={() => setHoveredFeature(null)}
                className={`bg-gradient-to-br ${
                  feature.color === 'blue'
                    ? 'from-blue-50 to-blue-100 border-blue-300'
                    : 'from-emerald-50 to-emerald-100 border-emerald-300'
                } border-2 rounded-3xl p-8 transition-all duration-300 ${
                  hoveredFeature === i ? 'scale-105 shadow-2xl' : 'shadow-lg'
                }`}
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-700 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Science Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why This Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Decentralized systems that observe and amplify natural behavior are more efficient than top-down planning.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border-2 border-gray-100">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Traditional Planning</h3>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <span className="text-red-500 text-xl">✗</span>
                    <span className="text-gray-700">Central authority decides &ldquo;optimal&rdquo; routes</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-red-500 text-xl">✗</span>
                    <span className="text-gray-700">Ignores local knowledge and preferences</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-red-500 text-xl">✗</span>
                    <span className="text-gray-700">Creates artificial friction (browsing, ratings)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-red-500 text-xl">✗</span>
                    <span className="text-gray-700">Fights against how people actually move</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Cowpath Intelligence</h3>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <span className="text-emerald-500 text-xl">✓</span>
                    <span className="text-gray-700">AI learns from actual movement patterns</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-emerald-500 text-xl">✓</span>
                    <span className="text-gray-700">Respects organic routes and timing</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-emerald-500 text-xl">✓</span>
                    <span className="text-gray-700">Removes unnecessary platform friction</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-emerald-500 text-xl">✓</span>
                    <span className="text-gray-700">Amplifies what people already do naturally</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-12 pt-12 border-t-2 border-gray-100">
              <div className="bg-gradient-to-r from-blue-600 to-emerald-600 text-white rounded-2xl p-8">
                <p className="text-lg md:text-xl leading-relaxed">
                  <span className="font-bold">The result:</span> Transportation that feels effortless because it follows the sophisticated patterns people create naturally—not the rigid systems someone designed in an office.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-blue-600 via-blue-700 to-emerald-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE0YzAgNy43MzItNi4yNjggMTQtMTQgMTRzLTE0LTYuMjY4LTE0LTE0UzE0LjI2OCAwIDIyIDBzMTQgNi4yNjggMTQgMTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>

        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            See It In Action
          </h2>
          <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Try the interactive demo to experience zero-friction ridesharing. Toggle your mode and watch AI do the rest.
          </p>

          <Link
            href="/demo"
            className="inline-block group bg-white text-blue-700 px-10 py-5 rounded-full font-bold text-xl shadow-2xl hover:shadow-3xl transition-all hover:scale-105"
          >
            <span className="flex items-center gap-3">
              Launch Demo
              <span className="group-hover:translate-x-2 transition-transform text-2xl">→</span>
            </span>
          </Link>

          <p className="mt-8 text-blue-200 text-sm">
            Best viewed on mobile • No installation required
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Hitch</h3>
          <p className="mb-6">Transportation without central planning</p>
          <div className="flex justify-center gap-8 text-sm">
            <Link href="/demo" className="hover:text-white transition-colors">
              Demo
            </Link>
            <a href="#how-it-works" className="hover:text-white transition-colors">
              How It Works
            </a>
            <a href="https://github.com" className="hover:text-white transition-colors">
              GitHub
            </a>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-sm text-gray-500">
            <p>Built for Albania • AI-powered ridesharing • Privacy-first by design</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
