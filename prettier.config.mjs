import prettierConfig from "@nik3iw/prettier-config";
// import * as prettierPluginAstro from "prettier-plugin-astro";
// import * as prettierPluginTailwind from "prettier-plugin-tailwindcss";

/**
 * @see https://prettier.io/docs/configuration
 * @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions}
 */
const config = {
  ...prettierConfig,
  plugins: ["prettier-plugin-astro", "prettier-plugin-tailwindcss"],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
  tailwindFunctions: ["tv"],
};

export default config;
