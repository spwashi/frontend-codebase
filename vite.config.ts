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
      "@": path.resolve(__dirname, "./src/app/@"),
      "@core": path.resolve(__dirname, "./src/app/@core"),
      "@features": path.resolve(__dirname, "./src/app/@features"),
      "@junction": path.resolve(__dirname, "./src/app/@junction"),
      "@services": path.resolve(__dirname, "./src/app/@services"),
      "@widgets": path.resolve(__dirname, "./src/app/@widgets"),
    },
  },
  plugins: [react(), viteTsconfigPaths(), svgrPlugin()],
});
