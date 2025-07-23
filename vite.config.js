// // import { defineConfig } from 'vite'
// // import react from '@vitejs/plugin-react'

// // // https://vite.dev/config/
// // export default defineConfig({
// //   base: '/MyPortfolio/',
// //   plugins: [react()],
// // });
// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // The 'base' option ensures that all links and assets are correctly resolved
// // when deploying to a subdirectory like '/MyPortfolio/'.
// // This makes your deployed project behave the same as on localhost.
// export default defineConfig({
//   base: '/MyPortfolio/',
//   plugins: [react()],
// });
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: './',  // <-- Ye change karo
  plugins: [react()],
})

