import type { CoreThemeColor, CoreThemeSize, CoreThemeVariant } from "@/types";

export interface ButtonProps {
  color?: CoreThemeColor;
  variant?: CoreThemeVariant;
  size?: CoreThemeSize;
  leadingIcon?: unknown;
  trailingIcon?: unknown;
  isLoading?: boolean;
}
