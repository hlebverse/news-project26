# AI Blog - Next.js Application

A modern AI Blog website built with Next.js 16, TypeScript, Tailwind CSS, and Prisma.

## 🚀 Features

- **📝 Articles Management**: Create, read, update, and delete articles
- **🏗️ Projects Showcase**: Display and manage projects
- **📸 Screenshots Gallery**: Upload and manage project screenshots
- **🔍 Search & Filter**: Search articles by title, content, or category
- **🎨 Dark Theme**: Beautiful dark UI inspired by Figma design
- **📱 Responsive Design**: Mobile-friendly layout
- **⚡ Fast Performance**: Optimized with Next.js
- **🗄️ SQLite Database**: Lightweight database with Prisma ORM

## 📋 Prerequisites

- Node.js 18+
- npm or yarn

## 🛠️ Installation

1. Clone the repository:
```bash
git clone git@github.com:hlebverse/news-project26.git
cd news-project26
```

2. Install dependencies:
```bash
npm install
```

3. Setup environment variables:
```bash
cp .env.example .env.local
```

4. Setup Prisma database:
```bash
npx prisma migrate dev --name init
```

5. Start the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
src/
├── app/
│   ├── api/              # API routes (articles, projects, screenshots)
│   ├── articles/         # Article pages
│   ├── projects/         # Projects pages
│   ├── screenshots/      # Screenshots gallery
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page
├── components/           # React components
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── ArticleCard.tsx
│   ├── ProjectCard.tsx
│   ├── SearchBar.tsx
│   ├── Sidebar.tsx
│   └── Footer.tsx
├── lib/                  # Utilities
│   └── prisma.ts
├── styles/               # Global styles
│   └── globals.css
├── types/                # TypeScript types
│   └── index.ts
└── utils/                # Helper functions
    └── formatters.ts

prisma/
└── schema.prisma         # Database schema
```

## 🗄️ Database Models

### Article
- `id`: Unique identifier
- `title`: Article title
- `slug`: URL-friendly slug
- `excerpt`: Short description
- `content`: Full content
- `thumbnail`: Featured image
- `category`: Article category
- `tags`: Array of tags
- `views`: View count
- `published`: Publication status
- `author`: User relationship

### Project
- `id`: Unique identifier
- `name`: Project name
- `description`: Project description
- `thumbnail`: Featured image
- `screenshots`: Associated screenshots

### Screenshot
- `id`: Unique identifier
- `name`: Screenshot name
- `url`: Image URL
- `project`: Project relationship

## 🔌 API Endpoints

### Articles
- `GET /api/articles` - Get all published articles
- `GET /api/articles?search=query` - Search articles
- `GET /api/articles?category=AI` - Filter by category
- `GET /api/articles/[slug]` - Get single article
- `POST /api/articles` - Create article
- `PATCH /api/articles/[slug]` - Update article
- `DELETE /api/articles/[slug]` - Delete article

### Projects
- `GET /api/projects` - Get all projects
- `GET /api/projects/[id]` - Get single project
- `POST /api/projects` - Create project
- `PATCH /api/projects/[id]` - Update project
- `DELETE /api/projects/[id]` - Delete project

### Screenshots
- `GET /api/screenshots` - Get all screenshots
- `GET /api/screenshots/[id]` - Get single screenshot
- `POST /api/screenshots` - Create screenshot
- `PATCH /api/screenshots/[id]` - Update screenshot
- `DELETE /api/screenshots/[id]` - Delete screenshot

## 🎨 Color Scheme (Dark Theme)

- **Background**: `#0f0f0f`
- **Card Background**: `#1a1a1a`
- **Border**: `#2a2a2a`
- **Primary**: `#6366f1` (Indigo)
- **Accent**: `#ec4899` (Pink)
- **Text Primary**: `#ffffff`
- **Text Secondary**: `#a0aec0`

## 📦 Dependencies

- **Next.js 16** - React framework
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Styling
- **Prisma** - ORM & database
- **Lucide React** - Icons
- **Axios** - HTTP client
- **Zustand** - State management
- **React Hot Toast** - Notifications

## 🚀 Deployment

The application is ready to deploy on:
- **Vercel** (recommended for Next.js)
- **Netlify**
- **Railway**
- **Render**

## 📝 Scripts

```bash
# Development
npm run dev          # Start dev server

# Production
npm run build        # Build for production
npm run start        # Start production server

# Database
npm run prisma:migrate    # Run migrations
npm run prisma:studio     # Open Prisma Studio
npm run prisma:generate   # Generate Prisma client

# Code Quality
npm run lint         # Run ESLint
npm run format       # Format code with Prettier
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

MIT

## 👨‍💻 Author

hlebverse

## 🔗 Links

- [GitHub Repository](https://github.com/hlebverse/news-project26)
- [Live Demo](#) (Coming soon)
