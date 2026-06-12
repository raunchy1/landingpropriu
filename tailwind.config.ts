import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'JetBrains Mono', 'monospace'],
      },
      colors: {
        bg: '#080808',
        fg: '#EDEDEA',
        muted: '#6E6E69',
        dim: '#3A3A36',
        line: '#1E1E1C',
        'accent-green': '#2EBD59',
      },
      maxWidth: {
        content: '720px',
      },
    },
  },
  plugins: [],
}

export default config
