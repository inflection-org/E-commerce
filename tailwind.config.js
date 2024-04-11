/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      black: '#000000',
      white: '#FFFFFF',
      gray: '#808080',
      light_gray: '#f4f4f5',
      orange: '#ff5722',
      light_black: '#454545',
      red: '#FF0000',
      pink: '#FFC0CB',
      green: ' #008000',
      blue: '#0000FF',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    // ...
    require('@tailwindcss/forms'),
  ],
}
