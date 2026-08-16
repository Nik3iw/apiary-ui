<script setup lang="ts">
import type { PrimitiveProps } from "reka-ui";
import { Primitive, useForwardExpose } from "reka-ui";
import type { ButtonProps as ButtonPropsBase } from "@apiary-ui/core";
import { buttonVariants } from "@apiary-ui/core";
import { cn } from "tailwind-variants";
import type { ButtonHTMLAttributes, Component } from "vue";
import { computed } from "vue";
import { Spinner } from "../spinner";

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
    <Spinner
      v-if="props.isLoading"
      aria-hidden="true"
      class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform"
    />

    <!-- Leading Icon -->
    <component
      :is="props.leadingIcon"
      v-if="props.leadingIcon !== undefined"
      data-icon="leading"
      :class="{ invisible: props.isLoading }"
    />

    <!-- Slot Content -->
    <span v-if="$slots['default']" :class="{ invisible: props.isLoading }">
      <slot />
    </span>

    <!-- Trailing Icon -->
    <component
      :is="props.trailingIcon"
      v-if="props.trailingIcon !== undefined"
      data-icon="trailing"
      :class="{ invisible: props.isLoading }"
    />
  </Primitive>
</template>
