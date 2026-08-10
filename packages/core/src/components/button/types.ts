import type { ThemeMainColor, ThemeMainSize, ThemeMainVariant } from "../../types";

export interface ButtonProps {
  color?: ThemeMainColor;
  variant?: ThemeMainVariant;
  size?: ThemeMainSize;
  icon?: unknown;
  isLoading?: boolean;
}
