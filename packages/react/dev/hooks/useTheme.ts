import { useLocalStorage, useMedia } from "react-use";
import { useEffect } from "react";

type ThemeMode = "auto" | "dark" | "light";

const toggleHtmlThemeMode = (mode: "dark" | "light"): void => {
  const htmlTag = document.querySelector("html");

  if (htmlTag === null) {
    return;
  }

  if (mode === "light") {
    htmlTag.classList.remove("dark");
    htmlTag.classList.add("light");
  } else {
    htmlTag.classList.remove("light");
    htmlTag.classList.add("dark");
  }
};

export default function useTheme() {
  const [storeValue, setStoreValue] = useLocalStorage<ThemeMode>("react-theme", "auto");
  const isDarkPreferred = useMedia("(prefers-color-scheme: dark)");

  const isDark = () => storeValue === "dark" || (storeValue === "auto" && isDarkPreferred);

  useEffect(() => {
    const htmlTag = document.querySelector("html");

    if (htmlTag === null) {
      return;
    }

    if (storeValue === "dark" || (storeValue === "auto" && isDarkPreferred)) {
      toggleHtmlThemeMode("dark");
    } else {
      toggleHtmlThemeMode("light");
    }
  }, [isDarkPreferred, storeValue]);

  const toggle = () => {
    setStoreValue(isDark() ? "light" : "dark");
  };

  return { isDark, toggle };
}
