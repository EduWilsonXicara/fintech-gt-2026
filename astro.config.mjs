import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// ┌─────────────────────────────────────────────────────────────┐
// │  CONFIGURACIÓN GITHUB PAGES                                  │
// │  1. Actualiza `site` con tu usuario de GitHub               │
// │  2. Actualiza `base` si el repositorio tiene otro nombre    │
// │  Ejemplo repo: https://github.com/tu-usuario/fintech-gt-2026│
// └─────────────────────────────────────────────────────────────┘
export default defineConfig({
  site: 'https://TU_USUARIO.github.io',   // ← Actualizar con tu usuario
  base: '/fintech-gt-2026',               // ← Actualizar si cambias el nombre del repo
  outDir: './docs',                        // GitHub Pages sirve desde la carpeta /docs
  build: {
    assets: 'assets',
  },
  integrations: [tailwind()],
});
