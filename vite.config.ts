import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig(async () => {
  const plugins = [react(), tailwindcss()];
  try {
    return {
      plugins,
      base: '/AraujoeAlves_lp/', // 👈 adiciona o caminho do repositório aqui
    };
  } catch (error) {
    console.error(error);
    return { plugins, base: '/AraujoeAlves_lp/' };
  }
});
