module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
  mode: 'jit',
    purge: [
      './public/**/*.html',
      './src/**/*.{js,jsx,ts,tsx,vue}',
    ],
}
