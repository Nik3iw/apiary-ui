import { readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";

interface Token {
  name: string;
  value: string;
}

interface Color {
  lightTokens: Token[];
  lightP3Tokens: Token[];
  darkTokens: Token[];
  darkP3Tokens: Token[];
}

const P3_REGEX = /@supports[\s\S]*?\{([\s\S]*)}/;
const TOKEN_REGEX = /--[\w-]*?(\d+)\s*:\s*([^;]+);/g;

const COLOR_PALETTE = {
  primary: "iris",
  accent: "crimson",
  success: "jade",
  info: "blue",
  warning: "orange",
  error: "red",
  neutral: "slate",
} as const;

type COLOR_TOKENS = Record<keyof typeof COLOR_PALETTE, Color>;

const LIGHT_TEMPLATE = `
:root, .light, .light-theme {
[TOKENS]
}
`;

const DARK_TEMPLATE = `
.dark, .dark-theme {
[TOKENS]
}
`;

const P3_TEMPLATE = `
@supports (color: color(display-p3 1 1 1)) {
  @media (color-gamut: p3) {
[TOKENS]
  }
}
`;

const TAILWIND_TEMPLATE = `
@theme inline {
[TOKENS]
}
`;

function parseTokensFromBlock(content: string): Token[] {
  const tokens: Token[] = [];
  let match: RegExpExecArray | null;

  while ((match = TOKEN_REGEX.exec(content)) !== null) {
    tokens.push({
      name: (match[1] as unknown as string).trim(),
      value: (match[2] as unknown as string).trim(),
    });
  }

  return tokens;
}

async function generateColors() {
  const colors: COLOR_TOKENS = {} as COLOR_TOKENS;

  // Extract light & dark tokens from color palette
  for (const [token, radixToken] of Object.entries(COLOR_PALETTE)) {
    const tmpColor: Color = {} as Color;

    const files = {
      light: `@radix-ui/colors/${radixToken}.css`,
      dark: `@radix-ui/colors/${radixToken}-dark.css`,
    };

    // Extract light & dark tokens from this color
    for (const [themeMode, filePath] of Object.entries(files)) {
      const fileContent = await readFile(fileURLToPath(import.meta.resolve(filePath)), "utf8");
      const p3Match = P3_REGEX.exec(fileContent);

      const p3Block = p3Match !== null && p3Match.length > 1 ? p3Match[1] : "";
      const normalBlock = fileContent.replace(P3_REGEX, "");

      if (themeMode === "light") {
        tmpColor.lightTokens = parseTokensFromBlock(normalBlock);
        tmpColor.lightP3Tokens = parseTokensFromBlock(p3Block as unknown as string);
      } else {
        tmpColor.darkTokens = parseTokensFromBlock(normalBlock);
        tmpColor.darkP3Tokens = parseTokensFromBlock(p3Block as unknown as string);
      }
    }

    colors[token as keyof typeof COLOR_PALETTE] = tmpColor;
  }

  let lightTokensText = "";
  let lightP3TokensText = "";
  let darkTokensText = "";
  let darkP3TokensText = "";
  let tailwindTokensText = "";

  for (const [token, color] of Object.entries(colors)) {
    lightTokensText += "\n\n";
    lightTokensText += `  /* ${token} Color */\n`;
    lightTokensText += color.lightTokens.map((kv) => `  --ui-${token}-${kv.name}: ${kv.value};`).join("\n");

    lightP3TokensText += "\n\n";
    lightP3TokensText += `      /* ${token} Color */\n`;
    lightP3TokensText += color.lightP3Tokens.map((kv) => `      --ui-${token}-${kv.name}: ${kv.value};`).join("\n");

    darkTokensText += "\n\n";
    darkTokensText += `  /* ${token} Color */\n`;
    darkTokensText += color.darkTokens.map((kv) => `  --ui-${token}-${kv.name}: ${kv.value};`).join("\n");

    darkP3TokensText += "\n\n";
    darkP3TokensText += `      /* ${token} Color */\n`;
    darkP3TokensText += color.darkP3Tokens.map((kv) => `      --ui-${token}-${kv.name}: ${kv.value};`).join("\n");

    tailwindTokensText += "\n\n";
    tailwindTokensText += `  /* ${token} Color */\n`;
    tailwindTokensText += color.lightTokens
      .map((kv) => `  --color-${token}-${kv.name}: var(--ui-${token}-${kv.name});`)
      .join("\n");
  }

  let final = "";

  final += LIGHT_TEMPLATE.replace("[TOKENS]", () => lightTokensText) + "\n";
  final += DARK_TEMPLATE.replace("[TOKENS]", () => darkTokensText) + "\n";

  const lightP3 = LIGHT_TEMPLATE.replace("[TOKENS]", () => lightP3TokensText) + "\n";
  const darkP3 = DARK_TEMPLATE.replace("[TOKENS]", () => darkP3TokensText) + "\n";

  final += P3_TEMPLATE.replace("[TOKENS]", () => lightP3 + darkP3) + "\n";

  final += TAILWIND_TEMPLATE.replace("[TOKENS]", () => tailwindTokensText) + "\n";

  await writeFile("./lib/styles/colors.css", final, "utf8");
}

void generateColors();
