'use client'

import Link from 'next/link'
import { Article } from '../types'
import { formatDate } from '../utils'
import { Eye } from 'lucide-react'

interface ArticleCardProps {
  article: Article
}

export default function ArticleCard({ article }: ArticleCardProps) {
  return (
    <Link href={`/articles/${article.slug}`}>
      <div className="bg-dark-card hover:bg-dark-border transition-colors rounded-lg overflow-hidden border border-dark-border hover:border-primary cursor-pointer group">
        {/* Thumbnail */}
        {article.thumbnail && (
          <div className="w-full h-48 bg-gradient-dark overflow-hidden">
            <img
              src={article.thumbnail}
              alt={article.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform"
            />
          </div>
        )}

        {/* Content */}
        <div className="p-6">
          {/* Category */}
          {article.category && (
            <span className="inline-block bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded mb-3">
              {article.category}
            </span>
          )}

          {/* Title */}
          <h3 className="text-xl font-bold text-text-primary mb-2 line-clamp-2 group-hover:text-primary transition-colors">
            {article.title}
          </h3>

          {/* Excerpt */}
          {article.excerpt && (
            <p className="text-text-secondary text-sm mb-4 line-clamp-2">
              {article.excerpt}
            </p>
          )}

          {/* Meta */}
          <div className="flex items-center justify-between text-xs text-text-secondary">
            <span>{formatDate(article.createdAt)}</span>
            <div className="flex items-center gap-2">
              <Eye size={16} />
              <span>{article.views}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
