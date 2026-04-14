import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// ┌─────────────────────────────────────────────────────────────┐
// │  CONFIGURACIÓN GITHUB PAGES                                  │
// │  1. Actualiza `site` con tu usuario de GitHub               │
// │  2. Actualiza `base` si el repositorio tiene otro nombre    │
// │  Ejemplo repo: https://github.com/tu-usuario/fintech-gt-2026│
// └─────────────────────────────────────────────────────────────┘
export default defineConfig({
  site: 'https://EduWilsonXicara.github.io',
  base: '/fintech-gt-2026',
  outDir: './docs',                        // GitHub Pages sirve desde la carpeta /docs
  build: {
    assets: 'assets',
  },
  // Deshabilitar toolbar de dev — interfiere con el cálculo de viewport de Reveal.js
  devToolbar: { enabled: false },
  integrations: [tailwind()],
});
