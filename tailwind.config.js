/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        prabodha: {
          warm: '#FAF8FE',
          white: '#FFFFFF',
          neutral: '#F4EFFB',
          text: '#16131F',
          muted: '#6E6978',
          primary: '#7550C8',
          deep: '#51349A',
          lavender: '#EDE6FB',
          'lavender-subtle': '#F7F3FD',
          border: '#E4DCF0',
          dark: {
            bg: '#0B0A0F',
            surface: '#14121E',
            card: '#181625',
            border: '#272535',
            text: '#F3F2F8',
            muted: '#9490A0',
          }
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        editorial: ['Newsreader', 'Georgia', 'serif'],
        display: ['"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'soft-xs': '0 1px 3px rgba(117, 80, 200, 0.05)',
        'soft-sm': '0 3px 10px -2px rgba(117, 80, 200, 0.08), 0 1px 3px rgba(22, 19, 31, 0.02)',
        'soft': '0 12px 32px -4px rgba(117, 80, 200, 0.1), 0 2px 8px rgba(22, 19, 31, 0.03)',
        'soft-lg': '0 22px 50px -8px rgba(117, 80, 200, 0.14), 0 4px 14px rgba(22, 19, 31, 0.04)',
        'soft-xl': '0 32px 70px -12px rgba(117, 80, 200, 0.18), 0 8px 24px rgba(22, 19, 31, 0.05)',
        'glow-purple': '0 0 40px -8px rgba(117, 80, 200, 0.35)',
        'light-elevated': '0 14px 40px -8px rgba(117, 80, 200, 0.12), 0 0 0 1px rgba(117, 80, 200, 0.08)',
      },
      animation: {
        'float-slow': 'float 7s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 4s ease-in-out infinite',
        'spin-slow': 'spin 12s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.85' },
        },
      }
    },
  },
  plugins: [],
}
