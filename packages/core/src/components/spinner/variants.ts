import { tv } from "tailwind-variants";
import type { VariantProps } from "tailwind-variants";

export const spinnerVariants = tv({
  base: "animate-spin",
  variants: {
    size: {
      small: "size-3",
      medium: "size-4",
      large: "size-5",
    },
  },
  defaultVariants: {
    size: "medium",
  },
});

export type SpinnerVariants = VariantProps<typeof spinnerVariants>;
