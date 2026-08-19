import type { CoreThemeColor, CoreThemeSizeExtended, CoreThemeVariant } from "@/types";

export interface IconButtonProps {
  icon: unknown;
  variant?: CoreThemeVariant;
  color?: CoreThemeColor;
  size?: CoreThemeSizeExtended;
  isRounded?: boolean;
  isLoading?: boolean;
}
