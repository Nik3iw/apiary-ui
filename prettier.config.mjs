import prettierConfig from "@nik3iw/prettier-config";
// import * as prettierPluginTailwind from "prettier-plugin-tailwindcss";

/**
 * @see https://prettier.io/docs/configuration
 * @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions}
 */
const config = {
  ...prettierConfig,
  plugins: ["prettier-plugin-tailwindcss"],
  tailwindFunctions: ["tv"],
};

export default config;
