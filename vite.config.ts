import path from "node:path";
import { defineConfig } from "vite";
import vuePlugin from "@vitejs/plugin-vue";
import VitePluginVueDevTools from "vite-plugin-vue-devtools";
import dts from "vite-plugin-dts";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    vuePlugin(),
    VitePluginVueDevTools(),
    dts({
      bundleTypes: true,
      insertTypesEntry: true,
      tsconfigPath: "./tsconfig.build.json",
      include: ["lib"],
    }),
  ],
  build: {
    copyPublicDir: false,
    emptyOutDir: true,
    sourcemap: true,
    lib: {
      // name: "hive-ui",
      entry: path.resolve(import.meta.dirname, "lib/index.ts"),
      formats: ["es"],
      fileName: "index",
      // fileName: (format) => `index.${format}.js`,
    },
    rolldownOptions: {
      // external: ['vue'],
    },
  },
});
