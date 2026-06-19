import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
// Rolldown/Vite a veces resuelve react-simple-maps al bundle UMD/CJS (usa require).
// Forzar el ESM oficial: import estáticos (prop-types, d3-geo, etc.).
const rsmEsm = path.resolve(
  __dirname,
  'node_modules/react-simple-maps/dist/index.es.js',
)

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'react-simple-maps': rsmEsm,
    },
  },
  optimizeDeps: {
    include: [
      'react-simple-maps',
      'prop-types',
      'd3-geo',
      'topojson-client',
      'd3-zoom',
      'd3-selection',
    ],
  },
})
