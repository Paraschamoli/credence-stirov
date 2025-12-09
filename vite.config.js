import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { visualizer } from "rollup-plugin-visualizer";

export default defineConfig({
  plugins: [
    react(),
    visualizer({
      filename: "bundle-analysis.html",
      open: false
    })
  ],
  base: "/credence-stirov",
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Separate React into its own chunk
          "react-vendor": ["react", "react-dom"],
          // Separate large UI libraries if you have any
        }
      }
    }
  }
});