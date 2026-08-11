import { createConfig } from "@nik3iw/eslint-config";
import { globalIgnores } from "eslint/config";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";

export default createConfig({
  platform: "web",
  configs: {
    unicorn: true,
    importX: true,
  },
  extends: [globalIgnores(["dist"]), reactHooks.configs.flat.recommended, reactRefresh.configs.vite],
});
