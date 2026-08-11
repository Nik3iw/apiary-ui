import type { ElementType, ReactElement, ReactNode } from "react";
import type { ButtonProps as ButtonPropsCore } from "@apiary-ui/core";
import { buttonVariants } from "@apiary-ui/core";
import { Button as ButtonBase } from "@base-ui/react/button";
import { cn } from "tailwind-variants";

interface Props extends ButtonBase.Props, Omit<ButtonPropsCore, "leadingIcon" | "trailingIcon"> {
  children?: ReactNode;
  leadingIcon?: ElementType;
  trailingIcon?: ElementType;
}

export function Button({
  children,
  variant,
  color,
  size,
  isLoading,
  leadingIcon: LeadingIcon,
  trailingIcon: TrailingIcon,
  disabled,
  className,
  ...rest
}: Props): ReactElement {
  return (
    <ButtonBase
      data-slot="button"
      data-variant={variant}
      data-color={color}
      data-size={size}
      data-loading={isLoading ? "" : undefined}
      disabled={disabled || isLoading}
      aria-busy={isLoading}
      className={cn(buttonVariants({ variant, color, size }), className)}
      {...rest}
    >
      {LeadingIcon === undefined ? null : <LeadingIcon data-icon="leading" />}
      {children}
      {TrailingIcon === undefined ? null : <TrailingIcon data-icon="trailing" />}
    </ButtonBase>
  );
}
