/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        canvas: {
          page: '#F5F2EC',
          section: '#EFEAE1',
          elevated: '#FFFFFF',
          dark: '#1F2428',
          'dark-soft': '#2C3338',
        },
        text: {
          primary: '#1C1C1C',
          secondary: '#5F5A52',
          subtle: '#8A8278',
          inverse: '#FFFFFF',
          'inverse-muted': '#D8D2C8',
        },
        brand: {
          primary: '#C28A2C',
          'primary-hover': '#A97822',
          'primary-soft': '#F1E3C7',
          graphite: '#2C3338',
          'graphite-dark': '#1F2428',
        },
        border: {
          light: '#DDD6C8',
          medium: '#C9C0B2',
          dark: '#3A4248',
        },
        status: {
          success: '#2F6F4E',
          warning: '#C28A2C',
          danger: '#B5473A',
        },
      },
      fontFamily: {
        heading: ['Manrope', 'Inter', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        sm: '0.5rem',
        md: '0.875rem',
        lg: '1.25rem',
        xl: '1.75rem',
      },
      boxShadow: {
        card: '0 12px 32px rgba(31, 36, 40, 0.08)',
        hero: '0 24px 80px rgba(31, 36, 40, 0.22)',
      },
    },
  },
  plugins: [],
};
