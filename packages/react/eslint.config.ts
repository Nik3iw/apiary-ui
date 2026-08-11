import { createConfig } from "@nik3iw/eslint-config";
import { globalIgnores } from "eslint/config";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import eslintReact from "@eslint-react/eslint-plugin";

export default createConfig({
  platform: "web",
  configs: {
    unicorn: true,
    importX: true,
  },
  extends: [
    globalIgnores(["dist"]),
    eslintReact.configs["strict-type-checked"],
    reactHooks.configs.flat.recommended,
    reactRefresh.configs.vite,
  ],
});
