// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // include all your component files
  ],
theme: {
  extend: {
    fontFamily: {
      urbanist: ['Urbanist', 'sans-serif'],
    },
    backgroundImage: {
        'hero-bg': "url('/src/assets/homebackground.png')", // Adjust path if needed
    },
  },
}
}
