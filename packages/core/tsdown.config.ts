import { defineConfig } from "tsdown";

export default defineConfig({
  entry: ["src/index.ts"],
  tsconfig: "./tsconfig.app.json",
  format: ["esm"],
  sourcemap: true,
  clean: true,
  dts: true,
  treeshake: true,
  deps: {
    neverBundle: ["tailwind-variants"],
  },
});
