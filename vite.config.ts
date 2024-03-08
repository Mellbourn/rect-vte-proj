import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

const config = defineConfig({
  plugins: [react()],
  resolve: {
    extensions: [".customer1.ts", ".ts", ".tsx"],
  },
});
console.log("config", config);
// https://vitejs.dev/config/
export default config;
