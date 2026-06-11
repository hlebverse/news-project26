export default function Hero() {
  return (
    <section className="relative bg-gradient-dark py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text-primary mb-6 leading-tight">
          Welcome to AI <span className="bg-gradient-primary bg-clip-text text-transparent">Blog</span>
        </h1>
        <p className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto">
          Discover cutting-edge articles about artificial intelligence, machine learning, and technology trends
        </p>
        <button className="bg-primary hover:bg-primary-hover text-white px-8 py-3 rounded-lg font-semibold transition-colors">
          Start Reading
        </button>
      </div>
    </section>
  )
}
