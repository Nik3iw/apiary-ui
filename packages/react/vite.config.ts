import path from "node:path";

import { defineConfig } from "vite";
import viteReact, { reactCompilerPreset } from "@vitejs/plugin-react";
import babelPlugin from "@rolldown/plugin-babel";
import tailwindcss from "@tailwindcss/vite";
import dts from "vite-plugin-dts";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    viteReact(),
    babelPlugin({ presets: [reactCompilerPreset()] }),
    tailwindcss(),
    dts({
      bundleTypes: true,
      insertTypesEntry: true,
      tsconfigPath: "./tsconfig.build.json",
      include: ["src"],
    }),
  ],
  build: {
    copyPublicDir: false,
    emptyOutDir: true,
    sourcemap: true,
    lib: {
      // name: "@apiary-ui/vue",
      entry: path.resolve(import.meta.dirname, "src/index.ts"),
      formats: ["es"],
      fileName: "index",
      // fileName: (format) => `index.${format}.js`,
    },
    rolldownOptions: {
      // external: ['vue'],
    },
  },
});
