import type { Metadata } from 'next'
import Header from './components/Header'
import Footer from './components/Footer'
import './globals.css'

export const metadata: Metadata = {
  title: 'AI Blog - Articles about AI and Technology',
  description: 'Discover cutting-edge articles about artificial intelligence, machine learning, and technology trends',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-dark-bg text-text-primary">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
