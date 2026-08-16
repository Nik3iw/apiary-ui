<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { LoaderCircle } from "@lucide/vue";
import type { SpinnerProps } from "@apiary-ui/core";
import { spinnerVariants } from "@apiary-ui/core";
import { cn } from "tailwind-variants";

interface Props extends SpinnerProps {
  class?: HTMLAttributes["class"];
}

const props = withDefaults(defineProps<Props>(), {
  size: "medium",
});
</script>

<template>
  <LoaderCircle
    data-slot="spinner"
    role="status"
    aria-label="loading"
    :class="cn(spinnerVariants({ size: props.size }), props.class)"
  />
</template>
