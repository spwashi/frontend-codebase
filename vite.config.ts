import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteTsconfigPaths from "vite-tsconfig-paths";
import svgrPlugin from "vite-plugin-svgr";
import * as path from "path";

export default defineConfig({
  define: {
    "window.global": {},
  },
  resolve: {
    alias: {
      "@generated": path.resolve(__dirname, "./src/__generated__"),
      "@identities": path.resolve(__dirname, "./src/app/@identities"),
      "@core": path.resolve(__dirname, "./src/app/@core"),
      "@features": path.resolve(__dirname, "./src/app/@features"),
      "@services": path.resolve(__dirname, "./src/app/@services"),
      "@widgets": path.resolve(__dirname, "./src/app/@widgets"),
    },
  },
  plugins: [react(), viteTsconfigPaths(), svgrPlugin()],
});
