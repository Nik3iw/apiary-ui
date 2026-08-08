import { createConfig } from "@nik3iw/eslint-config";

export default createConfig({
  platform: "web",
  configs: {
    unicorn: true,
    importX: true,
  },
  extends: [
    {
      ignores: ["dist", "eslint.config.ts", "src"],
    },
  ],
});
