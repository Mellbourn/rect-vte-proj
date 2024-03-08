import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";

export default ({ mode }: { mode: string }) => {
  const env = loadEnv(mode, process.cwd(), "");

  const config = defineConfig({
    plugins: [react()],
    resolve: {
      extensions: [`.${env.CUSTOMER}.ts`, ".ts", ".tsx"],
    },
  });
  // https://vitejs.dev/config/
  return config;
};
