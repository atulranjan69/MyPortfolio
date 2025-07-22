
// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,jsx,ts,tsx}",
//   ],
//   safelist: [
//     // "clip-path-custom", // ✅ Ensure this class is always included
//     "clip-path-custom-2",
//     // "clip-path-custom-3", // ✅ Ensure this class is always included
//   ],
//   theme: {
//     extend: {
//       keyframes: {
//         blob: {
//           '0%': { transform: 'scale(1)' },
//           '33%': { transform: 'scale(1.2)' },
//           '66%': { transform: 'scale(0.8)' },
//           '100%': { transform: 'scale(1)' },
//         },
//       },
//       animation: {
//         blob: 'blob 10s infinite',
//       },
//       backgroundImage: {
//         'skills-gradient': 'linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%)',
        
//         // ✅ Add this if you are using bg-experience-gradient
//         'experience-gradient': 'linear-gradient(135deg, #1e1e2f, #25254b)',
//       },
//     },
//   },
//   plugins: [],
// }
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        blob: {
          '0%': { transform: 'scale(1)' },
          '33%': { transform: 'scale(1.2)' },
          '66%': { transform: 'scale(0.8)' },
          '100%': { transform: 'scale(1)' },
        },
      },
      animation: {
        blob: 'blob 10s infinite',
      },
      backgroundImage: {
        'skills-gradient': 'linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%)',
      },
    },
  },
  plugins: [],
};