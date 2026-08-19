import type { CoreThemeColor, CoreThemeSizeExtended, CoreThemeVariant } from "@/types";

export interface ButtonProps {
  variant?: CoreThemeVariant;
  color?: CoreThemeColor;
  size?: CoreThemeSizeExtended;
  leadingIcon?: unknown;
  trailingIcon?: unknown;
  isElevated?: boolean;
  hasMotion?: boolean;
  isLoading?: boolean;
}
