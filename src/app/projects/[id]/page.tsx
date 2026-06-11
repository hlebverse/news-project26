'use client'

import { useState, useEffect } from 'react'
import { Project } from '@/types'

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  const [project, setProject] = useState<Project | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchProject()
  }, [params.id])

  const fetchProject = async () => {
    try {
      const res = await fetch(`/api/projects/${params.id}`)
      const data = await res.json()
      setProject(data.project)
    } catch (error) {
      console.error('Error fetching project:', error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) return <div className="text-center py-12">Loading...</div>
  if (!project) return <div className="text-center py-12">Project not found</div>

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {project.thumbnail && (
        <img
          src={project.thumbnail}
          alt={project.name}
          className="w-full h-96 object-cover rounded-lg mb-8"
        />
      )}

      <h1 className="text-4xl font-bold text-text-primary mb-4">{project.name}</h1>
      {project.description && (
        <p className="text-text-secondary text-lg mb-8">{project.description}</p>
      )}

      {project.screenshots && project.screenshots.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold text-text-primary mb-6">Screenshots</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {project.screenshots.map((screenshot) => (
              <img
                key={screenshot.id}
                src={screenshot.url}
                alt={screenshot.name}
                className="w-full h-64 object-cover rounded-lg border border-dark-border"
              />
            ))}
          </div>
        </div>
      )}
    </section>
  )
}
