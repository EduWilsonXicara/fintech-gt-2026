/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        fintech: {
          dark:     '#0A0F1E',
          navy:     '#0D1B4B',
          blue:     '#1A56DB',
          electric: '#38BDF8',
          cyan:     '#06B6D4',
          success:  '#10B981',
          warning:  '#F59E0B',
          danger:   '#EF4444',
          muted:    '#94A3B8',
        },
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        inter:      ['Inter', 'sans-serif'],
        mono:       ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'hero-gradient':  'linear-gradient(135deg, #0A0F1E 0%, #0D1B4B 60%, #1A2F6B 100%)',
        'card-gradient':  'linear-gradient(135deg, rgba(26,86,219,0.12) 0%, rgba(56,189,248,0.06) 100%)',
        'slide-gradient': 'radial-gradient(ellipse at top left, #0D1B4B 0%, #0A0F1E 70%)',
      },
      boxShadow: {
        'electric': '0 0 20px rgba(56,189,248,0.25)',
        'card':     '0 4px 32px rgba(0,0,0,0.4)',
        'glow':     '0 0 40px rgba(26,86,219,0.3)',
      },
      animation: {
        'fade-in-up':   'fadeInUp 0.6s ease-out',
        'pulse-glow':   'pulseGlow 2s ease-in-out infinite',
        'count-up':     'countUp 1.5s ease-out',
      },
      keyframes: {
        fadeInUp: {
          '0%':   { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(56,189,248,0.2)' },
          '50%':      { boxShadow: '0 0 40px rgba(56,189,248,0.5)' },
        },
      },
    },
  },
  plugins: [],
};
