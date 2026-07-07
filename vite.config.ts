import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          three: ["three", "three-stdlib"],
          "r3f-vendor": [
            "@react-three/fiber",
            "@react-three/drei",
            "@react-three/postprocessing",
            "@react-three/rapier",
          ],
          gsap: ["gsap"],
        },
      },
    },
  },
});
