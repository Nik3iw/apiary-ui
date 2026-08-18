import { tv } from "tailwind-variants";
import type { VariantProps } from "tailwind-variants";

export const spinnerVariants = tv({
  base: "animate-spin",
  variants: {
    size: {
      xSmall: "size-2",
      small: "size-3",
      medium: "size-4",
      large: "size-8",
      xLarge: "size-12",
    },
  },
  defaultVariants: {
    size: "medium",
  },
});

export type SpinnerVariants = VariantProps<typeof spinnerVariants>;
