import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueDevTools from "vite-plugin-vue-devtools";
import dts from "vite-plugin-dts";
import { resolve } from "node:path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
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
      entry: resolve(__dirname, "lib/index.ts"),
      formats: ["es"],
      fileName: "index",
      // fileName: (format) => `index.${format}.js`,
    },
    rolldownOptions: {
      // external: ['vue'],
    },
  },
});
