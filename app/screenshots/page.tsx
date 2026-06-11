'use client'

import { useState, useEffect } from 'react'
import { Screenshot } from '@/types'

export default function ScreenshotsPage() {
  const [screenshots, setScreenshots] = useState<Screenshot[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchScreenshots()
  }, [])

  const fetchScreenshots = async () => {
    try {
      const res = await fetch('/api/screenshots')
      const data = await res.json()
      setScreenshots(data.screenshots || [])
    } catch (error) {
      console.error('Error fetching screenshots:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold text-text-primary mb-12">Screenshots</h1>

      {loading ? (
        <div className="text-center py-12">
          <p className="text-text-secondary">Loading screenshots...</p>
        </div>
      ) : screenshots.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-text-secondary">No screenshots found</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {screenshots.map((screenshot) => (
            <div key={screenshot.id} className="rounded-lg overflow-hidden border border-dark-border hover:border-primary transition-colors">
              <img
                src={screenshot.url}
                alt={screenshot.name}
                className="w-full h-64 object-cover hover:scale-105 transition-transform"
              />
              <div className="p-3 bg-dark-card">
                <p className="text-text-primary font-semibold text-sm">{screenshot.name}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}
