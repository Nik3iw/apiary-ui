import { useColorMode } from "@vueuse/core";
import { computed } from "vue";

export default function useTheme() {
  const mode = useColorMode();

  const isDark = computed(() => mode.value === "dark" || (mode.value === "auto" && mode.system.value === "dark"));

  return { isDark };
}
