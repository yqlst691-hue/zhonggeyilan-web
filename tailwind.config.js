/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // 品牌色系
      colors: {
        primary: {
          DEFAULT: '#0d9488',
          dark: '#096b63',
          light: '#14b8a6',
        },
        dark: '#0a2540',
        'dark-light': '#1a3a5c',
      },
      // 中文字体栈
      fontFamily: {
        sans: ['PingFang SC', 'Microsoft YaHei', 'sans-serif'],
      },
      // 内容最大宽度
      maxWidth: {
        container: '1200px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
