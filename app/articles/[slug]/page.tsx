'use client'

import { useState, useEffect } from 'react'
import { Article } from '../../types'
import { formatDate } from '../../utils'
import { Eye } from 'lucide-react'

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const [article, setArticle] = useState<Article | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchArticle()
  }, [params.slug])

  const fetchArticle = async () => {
    try {
      const res = await fetch(`/api/articles/${params.slug}`)
      const data = await res.json()
      setArticle(data.article)
    } catch (error) {
      console.error('Error fetching article:', error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) return <div className="text-center py-12">Loading...</div>
  if (!article) return <div className="text-center py-12">Article not found</div>

  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Thumbnail */}
      {article.thumbnail && (
        <img
          src={article.thumbnail}
          alt={article.title}
          className="w-full h-96 object-cover rounded-lg mb-8"
        />
      )}

      {/* Header */}
      <div className="mb-8">
        {article.category && (
          <span className="inline-block bg-primary/10 text-primary text-sm font-semibold px-3 py-1 rounded mb-4">
            {article.category}
          </span>
        )}
        <h1 className="text-5xl font-bold text-text-primary mb-4">{article.title}</h1>
        <div className="flex items-center gap-4 text-text-secondary">
          <span>{formatDate(article.createdAt)}</span>
          <div className="flex items-center gap-2">
            <Eye size={18} />
            <span>{article.views} views</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="prose prose-invert max-w-none text-text-primary">
        {article.content.split('\n').map((paragraph, i) => (
          paragraph && <p key={i} className="mb-4">{paragraph}</p>
        ))}
      </div>

      {/* Tags */}
      {article.tags && article.tags.length > 0 && (
        <div className="mt-12 pt-8 border-t border-dark-border">
          <div className="flex flex-wrap gap-2">
            {article.tags.map((tag) => (
              <span
                key={tag}
                className="bg-dark-card border border-dark-border text-text-secondary px-3 py-1 rounded text-sm"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      )}
    </article>
  )
}
