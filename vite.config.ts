import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteTsconfigPaths from "vite-tsconfig-paths";
import svgrPlugin from "vite-plugin-svgr";
import * as path from "path";

export default defineConfig({
  define: {
    global: {},
  },
  resolve: {
    alias: {
      "@generated": path.resolve(__dirname, "./src/__generated__"),
      "@": path.resolve(__dirname, "./src/app/@"),
      "@core": path.resolve(__dirname, "./src/app/@core"),
      "@features": path.resolve(__dirname, "./src/app/@features"),
      "@services": path.resolve(__dirname, "./src/app/@services"),
      "@widgets": path.resolve(__dirname, "./src/app/@widgets"),
    },
  },
  plugins: [react(), viteTsconfigPaths(), svgrPlugin()],
});
