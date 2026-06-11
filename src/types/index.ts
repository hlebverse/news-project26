export interface Article {
  id: string
  title: string
  slug: string
  excerpt?: string
  content: string
  thumbnail?: string
  category?: string
  tags: string[]
  views: number
  featured: boolean
  published: boolean
  authorId: string
  author?: User
  createdAt: string
  updatedAt: string
}

export interface User {
  id: string
  email: string
  name?: string
  avatar?: string
  bio?: string
  createdAt: string
  updatedAt: string
}

export interface Comment {
  id: string
  content: string
  articleId: string
  authorId: string
  author?: User
  createdAt: string
  updatedAt: string
}

export interface Project {
  id: string
  name: string
  description?: string
  thumbnail?: string
  screenshots?: Screenshot[]
  createdAt: string
  updatedAt: string
}

export interface Screenshot {
  id: string
  name: string
  url: string
  projectId: string
  createdAt: string
  updatedAt: string
}
