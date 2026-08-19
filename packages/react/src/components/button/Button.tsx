import type { ReactElement, ComponentType } from "react";
import type { ButtonProps } from "@apiary-ui/core";
import { buttonVariants } from "@apiary-ui/core";
import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { cn } from "tailwind-variants";
import { Spinner } from "../spinner";

type DataIcon = "leading" | "trailing";

interface Props extends ButtonPrimitive.Props, Omit<ButtonProps, "leadingIcon" | "trailingIcon"> {
  leadingIcon?: ComponentType<{ className?: string; "data-icon"?: DataIcon }>;
  trailingIcon?: ComponentType<{ className?: string; "data-icon"?: DataIcon }>;
}

export function Button({
  children,
  variant,
  color,
  size,
  leadingIcon: LeadingIcon,
  trailingIcon: TrailingIcon,
  isElevated,
  hasMotion,
  isLoading,
  disabled,
  className,
  ...rest
}: Props): ReactElement {
  const isDisabled = disabled || isLoading;

  const slots = buttonVariants({ variant, color, size, isElevated, hasMotion, isLoading });

  return (
    <ButtonPrimitive
      data-slot="button"
      data-variant={buttonVariants.defaultVariants.variant}
      data-color={buttonVariants.defaultVariants.color}
      data-size={buttonVariants.defaultVariants.size}
      data-elevated={isElevated ? "" : undefined}
      data-motion={hasMotion ? "" : undefined}
      data-loading={isLoading ? "" : undefined}
      disabled={isDisabled}
      aria-busy={isLoading}
      className={cn(slots.base(), className)}
      {...rest}
    >
      {isLoading ? <Spinner aria-hidden="true" className={slots.loadingIcon()} /> : null}

      {LeadingIcon === undefined ? null : <LeadingIcon data-icon="leading" className={slots.icon()} />}

      {children === undefined ? null : <span className={slots.slot()}>{children}</span>}

      {TrailingIcon === undefined ? null : <TrailingIcon data-icon="trailing" className={slots.icon()} />}
    </ButtonPrimitive>
  );
}
