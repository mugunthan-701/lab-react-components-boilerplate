import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(() => {
  return {
    build: {
      outDir: 'build',
    },
    plugins: [react()],base:"/lab-react-components-boilerplate",
    assetsInclude: ["**/*.jpg", "**/*.JPG"],
  };
});