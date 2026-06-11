import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Dark theme colors from Figma
        'dark-bg': '#0f0f0f',
        'dark-card': '#1a1a1a',
        'dark-border': '#2a2a2a',
        'primary': '#6366f1',
        'primary-hover': '#4f46e5',
        'accent': '#ec4899',
        'text-primary': '#ffffff',
        'text-secondary': '#a0aec0',
      },
      backgroundImage: {
        'gradient-dark': 'linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 100%)',
        'gradient-primary': 'linear-gradient(135deg, #6366f1 0%, #ec4899 100%)',
      },
    },
  },
  plugins: [],
}
export default config
