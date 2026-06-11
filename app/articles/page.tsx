'use client'

import { useState, useEffect } from 'react'
import ArticleCard from '@/components/ArticleCard'
import SearchBar from '@/components/SearchBar'
import { Article } from '@/types'

export default function ArticlesPage() {
  const [articles, setArticles] = useState<Article[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchArticles()
  }, [])

  const fetchArticles = async () => {
    try {
      const res = await fetch('/api/articles')
      const data = await res.json()
      setArticles(data.articles || [])
    } catch (error) {
      console.error('Error fetching articles:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleSearch = async (query: string) => {
    if (!query) {
      fetchArticles()
      return
    }
    try {
      const res = await fetch(`/api/articles?search=${query}`)
      const data = await res.json()
      setArticles(data.articles || [])
    } catch (error) {
      console.error('Error searching:', error)
    }
  }

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold text-text-primary mb-8">All Articles</h1>
      
      <div className="mb-12">
        <SearchBar onSearch={handleSearch} />
      </div>

      {loading ? (
        <div className="text-center py-12">
          <p className="text-text-secondary">Loading articles...</p>
        </div>
      ) : articles.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-text-secondary">No articles found</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      )}
    </section>
  )
}
