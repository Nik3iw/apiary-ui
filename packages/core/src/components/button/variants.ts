import { tv } from "tailwind-variants";
import type { VariantProps } from "tailwind-variants";

export const buttonVariants = tv({
  base: "group/button aria-invalid:border-error-500 aria-invalid:ring-error-500 inline-flex shrink-0 cursor-pointer flex-row items-center justify-center rounded-4xl border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap shadow-neutral-700 transition-all outline-none select-none focus-visible:ring-[2px] active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none aria-invalid:ring-[2px] [&_[data-icon]]:pointer-events-none [&_[data-icon]]:shrink-0 [&_[data-icon]:not([class*='size-'])]:size-4",
  variants: {
    variant: {
      solid: "text-white",
      outline: "",
      ghost: "",
    },
    color: {
      primary: "focus-visible:border-primary-900 focus-visible:ring-primary-500",
      secondary: "focus-visible:border-secondary-900 focus-visible:ring-secondary-500",
      neutral: "focus-visible:border-neutral-900 focus-visible:ring-neutral-500",
      success: "focus-visible:border-success-900 focus-visible:ring-success-500",
      info: "focus-visible:border-info-900 focus-visible:ring-info-500",
      warning: "focus-visible:border-warning-900 focus-visible:ring-warning-500",
      error: "focus-visible:border-error-900 focus-visible:ring-error-500",
    },
    size: {
      small: "h-8 gap-1 px-3",
      medium: "h-9 gap-1.5 px-4",
      large: "h-10 gap-1.5 px-5",
    },
  },
  compoundVariants: [
    // Solid
    {
      variant: "solid",
      color: "primary",
      class: "bg-primary-700 hover:bg-primary-800 disabled:bg-primary-200",
    },
    {
      variant: "solid",
      color: "secondary",
      class: "bg-secondary-700 hover:bg-secondary-800 disabled:bg-secondary-200",
    },
    {
      variant: "solid",
      color: "neutral",
      class: "bg-neutral-700 hover:bg-neutral-800 disabled:bg-neutral-200",
    },
    {
      variant: "solid",
      color: "success",
      class: "bg-success-700 hover:bg-success-800 disabled:bg-success-200",
    },
    {
      variant: "solid",
      color: "info",
      class: "bg-info-700 hover:bg-info-800 disabled:bg-info-200",
    },
    {
      variant: "solid",
      color: "warning",
      class: "bg-warning-700 hover:bg-warning-800 disabled:bg-warning-200",
    },
    {
      variant: "solid",
      color: "error",
      class: "bg-error-700 hover:bg-error-800 disabled:bg-error-200",
    },

    // Outline
    {
      variant: "outline",
      color: "primary",
      class:
        "border-primary-500 hover:border-primary-600 text-primary-700 hover:bg-primary-50 disabled:border-primary-300 disabled:text-primary-400",
    },
    {
      variant: "outline",
      color: "secondary",
      class:
        "border-secondary-500 hover:border-secondary-600 text-secondary-700 hover:bg-secondary-50 disabled:border-secondary-300 disabled:text-secondary-400",
    },
    {
      variant: "outline",
      color: "neutral",
      class:
        "border-neutral-500 text-neutral-700 hover:border-neutral-600 hover:bg-neutral-50 disabled:border-neutral-300 disabled:text-neutral-400",
    },
    {
      variant: "outline",
      color: "success",
      class:
        "border-success-500 hover:border-success-600 text-success-700 hover:bg-success-50 disabled:border-success-300 disabled:text-success-400",
    },
    {
      variant: "outline",
      color: "info",
      class:
        "border-info-500 hover:border-info-600 text-info-700 hover:bg-info-50 disabled:border-info-300 disabled:text-info-400",
    },
    {
      variant: "outline",
      color: "warning",
      class:
        "border-warning-500 hover:border-warning-600 text-warning-700 hover:bg-warning-50 disabled:border-warning-300 disabled:text-warning-400",
    },
    {
      variant: "outline",
      color: "error",
      class:
        "border-error-500 hover:border-error-600 text-error-700 hover:bg-error-50 disabled:border-error-300 disabled:text-error-400",
    },

    // Ghost
    {
      variant: "ghost",
      color: "primary",
      class: "hover:bg-primary-50 text-primary-700 hover:text-primary-800 disabled:text-primary-400",
    },
    {
      variant: "ghost",
      color: "secondary",
      class: "hover:bg-secondary-50 text-secondary-700 hover:text-secondary-800 disabled:text-secondary-400",
    },
    {
      variant: "ghost",
      color: "neutral",
      class: "text-neutral-700 hover:bg-neutral-50 hover:text-neutral-800 disabled:text-neutral-400",
    },
    {
      variant: "ghost",
      color: "success",
      class: "hover:bg-success-50 text-success-700 hover:text-success-800 disabled:text-success-400",
    },
    {
      variant: "ghost",
      color: "info",
      class: "hover:bg-info-50 text-info-700 hover:text-info-800 disabled:text-info-400",
    },
    {
      variant: "ghost",
      color: "warning",
      class: "hover:bg-warning-50 text-warning-700 hover:text-warning-800 disabled:text-warning-400",
    },
    {
      variant: "ghost",
      color: "error",
      class: "hover:bg-error-50 text-error-700 hover:text-error-800 disabled:text-error-400",
    },
  ],
  defaultVariants: {
    variant: "solid",
    color: "primary",
    size: "medium",
  },
});

export type ButtonVariants = VariantProps<typeof buttonVariants>;
