'use client'

import Link from 'next/link'
import { Project } from '@/types'

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/projects/${project.id}`}>
      <div className="bg-dark-card hover:bg-dark-border transition-colors rounded-lg overflow-hidden border border-dark-border hover:border-primary cursor-pointer group">
        {/* Thumbnail */}
        {project.thumbnail && (
          <div className="w-full h-48 bg-gradient-dark overflow-hidden">
            <img
              src={project.thumbnail}
              alt={project.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform"
            />
          </div>
        )}

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-text-primary mb-2 group-hover:text-primary transition-colors">
            {project.name}
          </h3>
          {project.description && (
            <p className="text-text-secondary text-sm line-clamp-2">
              {project.description}
            </p>
          )}
        </div>
      </div>
    </Link>
  )
}
