import type { SpinnerProps } from "@apiary-ui/core";
import { spinnerVariants } from "@apiary-ui/core";
import { cn } from "tailwind-variants";
import { Loader2Icon } from "lucide-react";
import type { ComponentProps } from "react";

interface Props extends ComponentProps<"svg">, SpinnerProps {}

export function Spinner({ size, className, ...props }: Props) {
  return (
    <Loader2Icon
      data-slot="spinner"
      role="status"
      aria-label="Loading"
      className={cn(spinnerVariants({ size }), className)}
      {...props}
    />
  );
}
