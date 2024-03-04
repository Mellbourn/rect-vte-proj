import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import alias from "@rollup/plugin-alias";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    alias({
      entries: [
        { find: "constants.customer1.ts", replacement: "constants.ts" },
        { find: /^(.*)\.customer1.ts$/, replacement: "$1.ts" },
        { find: /constants.customer1.ts$/, replacement: "constants.ts" },
      ],
    }),
  ],
});
