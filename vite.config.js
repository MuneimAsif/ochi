import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()]
  // build:{
  //   title:'Presentation Design Agency | Presentation Design Services',
  //   favicon:'./src/assets/ochi.png'
  // }
})
