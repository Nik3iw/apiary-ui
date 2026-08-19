import type { ComponentType, ReactElement } from "react";
import type { IconButtonProps } from "@apiary-ui/core";
import { iconButtonVariants } from "@apiary-ui/core";
import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { cn } from "tailwind-variants";
import { Spinner } from "../spinner";

interface Props extends Omit<ButtonPrimitive.Props, "children">, Omit<IconButtonProps, "icon"> {
  icon: ComponentType<{ className?: string }>;
}

export function IconButton({
  icon: Icon,
  variant,
  color,
  size,
  isRounded,
  isLoading,
  disabled,
  className,
  ...rest
}: Props): ReactElement {
  const isDisabled = disabled || isLoading;

  const slots = iconButtonVariants({ variant, color, size, isRounded, isLoading });

  return (
    <ButtonPrimitive
      data-slot="button"
      data-variant={iconButtonVariants.defaultVariants.variant}
      data-color={iconButtonVariants.defaultVariants.color}
      data-size={iconButtonVariants.defaultVariants.size}
      data-rounded={isRounded ? "" : undefined}
      data-loading={isLoading ? "" : undefined}
      disabled={isDisabled}
      aria-busy={isLoading}
      className={cn(slots.base(), className)}
      {...rest}
    >
      {isLoading ? <Spinner aria-hidden="true" className={slots.loadingIcon()} /> : null}

      <Icon className={slots.icon()} />
    </ButtonPrimitive>
  );
}
