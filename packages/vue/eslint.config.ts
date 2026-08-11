import { globalIgnores } from "eslint/config";
import { defineConfigWithVueTs, vueTsConfigs } from "@vue/eslint-config-typescript";
import pluginVue from "eslint-plugin-vue";
import eslintPluginUnicorn from "eslint-plugin-unicorn";
import eslintConfigPrettier from "eslint-config-prettier/flat";
import js from "@eslint/js";
import globals from "globals";

// To allow more languages other than `ts` in `.vue` files, uncomment the following lines:
// import { configureVueProject } from '@vue/eslint-config-typescript'
// configureVueProject({ scriptLangs: ['ts', 'tsx'] })
// More info at https://github.com/vuejs/eslint-config-typescript/#advanced-setup

export default defineConfigWithVueTs(
  {
    name: "app/files-to-lint",
    files: ["**/*.{vue,ts,mts,tsx}"],
  },

  globalIgnores(["**/dist/**", "**/dist-ssr/**", "**/coverage/**"]),

  // JavaScript
  js.configs.recommended,

  // TypeScript
  vueTsConfigs.strictTypeChecked,
  vueTsConfigs.stylisticTypeChecked,

  // Unicorn
  eslintPluginUnicorn.configs.recommended,

  // Vue.js
  ...pluginVue.configs["flat/recommended"],

  // Prettier
  eslintConfigPrettier,

  // Rules
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx,vue}"],
    rules: {
      // JavaScript
      "array-callback-return": ["error"],
      curly: ["warn", "all"],
      eqeqeq: ["warn"],

      // TypeScript
      "@typescript-eslint/prefer-optional-chain": ["off"],
      "@typescript-eslint/prefer-nullish-coalescing": ["off"],
      "no-unused-vars": ["off"],
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          vars: "all",
          args: "all",
          argsIgnorePattern: "^_",
          caughtErrors: "all",
          caughtErrorsIgnorePattern: "^ignore",
          destructuredArrayIgnorePattern: "^_",
          ignoreRestSiblings: false,
          ignoreClassWithStaticInitBlock: false,
          ignoreUsingDeclarations: false,
          reportUsedIgnorePattern: false,
        },
      ],

      // Unicorn
      "unicorn/filename-case": ["off"],
      "unicorn/no-null": ["off"],
      "unicorn/prevent-abbreviations": ["off"],
      // This is a ES2023+ rule
      "unicorn/no-array-sort": ["off"],
      "unicorn/name-replacements": ["off"],
    },
  },

  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx,vue}"],
    languageOptions: {
      ecmaVersion: 2023,
      globals: {
        ...globals.serviceworker,
        ...globals.browser,
      },
    },
  },

  {
    files: ["vite.config.ts"],
    languageOptions: {
      ecmaVersion: 2024,
      globals: globals.node,
    },
  },
);
