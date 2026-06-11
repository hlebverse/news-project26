'use client'

import { useState } from 'react'

interface SidebarProps {
  categories?: string[]
  onCategoryChange?: (category: string) => void
}

export default function Sidebar({ categories = [], onCategoryChange }: SidebarProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const handleCategoryClick = (category: string) => {
    const newCategory = selectedCategory === category ? null : category
    setSelectedCategory(newCategory)
    onCategoryChange?.(newCategory || '')
  }

  return (
    <aside className="bg-dark-card border border-dark-border rounded-lg p-6 h-fit">
      <h3 className="text-lg font-bold text-text-primary mb-4">Categories</h3>
      <div className="space-y-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryClick(category)}
            className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
              selectedCategory === category
                ? 'bg-primary text-white'
                : 'bg-dark-border text-text-secondary hover:bg-dark-border hover:text-primary'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </aside>
  )
}
