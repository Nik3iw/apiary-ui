<script setup lang="ts">
import type { PrimitiveProps } from "reka-ui";
import { Primitive, useForwardExpose } from "reka-ui";
import type { ButtonProps as ButtonPropsBase } from "@apiary-ui/core";
import { buttonVariants } from "@apiary-ui/core";
import { cn } from "tailwind-variants";
import type { ButtonHTMLAttributes, Component } from "vue";
import { computed } from "vue";

// defineOptions({ inheritAttrs: false })

interface Props
  extends
    PrimitiveProps,
    Omit<ButtonPropsBase, "leadingIcon" | "trailingIcon">,
    /* @vue-ignore */ Omit<ButtonHTMLAttributes, "color"> {
  leadingIcon?: Component;
  trailingIcon?: Component;
}

const props = withDefaults(defineProps<Props>(), {
  as: "button",
  variant: "solid",
  color: "primary",
  size: "medium",
  isLoading: false,
});

const isDisabled = computed(() => props.disabled || props.isLoading);

const { forwardRef } = useForwardExpose();
</script>

<template>
  <Primitive
    :ref="forwardRef"
    data-slot="button"
    :data-variant="props.variant"
    :data-color="props.color"
    :data-size="props.size"
    :data-loading="props.isLoading ? '' : undefined"
    :as="props.as"
    :as-child="props.asChild"
    :disabled="isDisabled"
    :aria-busy="props.isLoading"
    :class="cn(buttonVariants({ variant: props.variant, color: props.color, size: props.size }), props.class)"
  >
    <component :is="props.leadingIcon" data-icon="leading" />
    <slot />
    <component :is="props.trailingIcon" data-icon="trailing" />
  </Primitive>
</template>
