module.exports = {
  content: [
    "./app.vue",
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [{
        'mytheme': { // custom theme
          'primary': '#0054a5',
          'primary-focus': '#0054a5',
          'primary-content': '#ffffff',
          "neutral": "#3D4451",
          "accent": "#37CDBE",
          "base-100": "#f6f6f6",
          // other colors
        }
      },
      'dark', // and some pre-defined theme
    ],
  },
}