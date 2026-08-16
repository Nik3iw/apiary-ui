import { createConfig } from "@nik3iw/eslint-config";
import tsEslint from "typescript-eslint";
import eslintPluginAstro from "eslint-plugin-astro";

export default createConfig({
  platform: "web",
  configs: {
    unicorn: true,
    importX: true,
  },
  extends: [
    {
      name: "app/files-to-lint",
      files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx,astro}"],
    },

    {
      ignores: ["dist", "eslint.config.ts"],
    },

    // Astro.js
    ...eslintPluginAstro.configs.recommended,

    {
      files: ["**/*.astro"],
      languageOptions: { parserOptions: { parser: tsEslint.parser } },
    },
  ],
});
