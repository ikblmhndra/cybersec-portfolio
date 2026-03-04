import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        terminal: {
          bg: '#030b03',
          surface: '#0a150a',
          border: '#1a3a1a',
          green: '#00ff9f',
          'green-dim': '#00cc7a',
          'green-muted': '#005533',
          'green-glow': 'rgba(0,255,159,0.15)',
          amber: '#ffb800',
          red: '#ff4444',
          blue: '#4488ff',
          comment: '#4a7a4a',
          text: '#c8e6c8',
          muted: '#5a7a5a',
        },
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'Fira Code', 'Cascadia Code', 'Consolas', 'monospace'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Share Tech Mono', 'JetBrains Mono', 'monospace'],
      },
      backgroundImage: {
        'grid-pattern': `
          linear-gradient(rgba(0,255,159,0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0,255,159,0.03) 1px, transparent 1px)
        `,
        'scanline': 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.05) 2px, rgba(0,0,0,0.05) 4px)',
      },
      backgroundSize: {
        'grid': '40px 40px',
      },
      boxShadow: {
        'glow-green': '0 0 20px rgba(0,255,159,0.4), 0 0 40px rgba(0,255,159,0.1)',
        'glow-green-sm': '0 0 10px rgba(0,255,159,0.3)',
        'glow-green-lg': '0 0 40px rgba(0,255,159,0.5), 0 0 80px rgba(0,255,159,0.2)',
        'terminal': 'inset 0 0 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(0,255,159,0.2)',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        glitch: {
          '0%, 100%': { transform: 'translate(0)', filter: 'none' },
          '20%': { transform: 'translate(-2px, 2px)', filter: 'hue-rotate(90deg)' },
          '40%': { transform: 'translate(2px, -2px)', filter: 'hue-rotate(180deg)' },
          '60%': { transform: 'translate(-1px, 1px)', filter: 'none' },
          '80%': { transform: 'translate(1px, -1px)', filter: 'hue-rotate(270deg)' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulse_glow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(0,255,159,0.4)' },
          '50%': { boxShadow: '0 0 40px rgba(0,255,159,0.8), 0 0 80px rgba(0,255,159,0.3)' },
        },
        'matrix-rain': {
          '0%': { transform: 'translateY(-100%)', opacity: '1' },
          '100%': { transform: 'translateY(100vh)', opacity: '0' },
        },
      },
      animation: {
        blink: 'blink 1s step-end infinite',
        scanline: 'scanline 8s linear infinite',
        glitch: 'glitch 3s infinite',
        'fade-in-up': 'fade-in-up 0.6s ease-out forwards',
        pulse_glow: 'pulse_glow 2s ease-in-out infinite',
        'matrix-rain': 'matrix-rain 3s linear infinite',
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#c8e6c8',
            maxWidth: '100%',
            a: { color: '#00ff9f' },
            strong: { color: '#00ff9f' },
            code: {
              color: '#00ff9f',
              backgroundColor: '#0a150a',
              borderRadius: '4px',
              padding: '2px 6px',
            },
            pre: {
              backgroundColor: '#0a150a',
              border: '1px solid #1a3a1a',
            },
            h1: { color: '#00ff9f', fontFamily: 'JetBrains Mono, monospace' },
            h2: { color: '#00cc7a', fontFamily: 'JetBrains Mono, monospace' },
            h3: { color: '#c8e6c8', fontFamily: 'JetBrains Mono, monospace' },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

export default config
