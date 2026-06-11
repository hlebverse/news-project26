'use client'

import { useState, useEffect } from 'react'
import Hero from '@/components/Hero'
import ArticleCard from '@/components/ArticleCard'
import SearchBar from '@/components/SearchBar'
import Sidebar from '@/components/Sidebar'
import { Article } from '@/types'

export default function Home() {
  const [articles, setArticles] = useState<Article[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedCategory, setSelectedCategory] = useState('')

  useEffect(() => {
    fetchArticles()
  }, [selectedCategory])

  const fetchArticles = async () => {
    try {
      setLoading(true)
      const query = selectedCategory ? `?category=${selectedCategory}` : ''
      const res = await fetch(`/api/articles${query}`)
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

  const categories = ['AI', 'Machine Learning', 'Web Development', 'Technology']

  return (
    <>
      <Hero />
      
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Search */}
        <div className="mb-12">
          <SearchBar onSearch={handleSearch} />
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Articles */}
          <div className="lg:col-span-3">
            {loading ? (
              <div className="text-center py-12">
                <p className="text-text-secondary">Loading articles...</p>
              </div>
            ) : articles.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-text-secondary">No articles found</p>
              </div>
            ) : (
              <div className="grid gap-6">
                {articles.map((article) => (
                  <ArticleCard key={article.id} article={article} />
                ))}
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div>
            <Sidebar
              categories={categories}
              onCategoryChange={setSelectedCategory}
            />
          </div>
        </div>
      </section>
    </>
  )
}
