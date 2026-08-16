<script setup lang="ts">
import useTheme from "./composables/useTheme.ts";
import { useColorMode } from "@vueuse/core";
import { SunDim, MoonStar } from "@lucide/vue";
import { Button } from "@/components/button";
import { Spinner } from "@/components/spinner";
import { Globe } from '@lucide/vue';

const { isDark } = useTheme();
const mode = useColorMode();

const handleToggleTheme = () => {
  mode.value = isDark.value ? "light" : "dark";
};
</script>

<template>
  <main class="flex min-h-screen w-full flex-col gap-4 bg-neutral-100 p-4">
    <div>
      <h1>Hello World!</h1>
    </div>

    <div>
      <Button :is-loading="true" :leading-icon="Globe">Click Me</Button>
    </div>

    <div>
      <Spinner />
    </div>



    <div>
      <button
        class="cursor-pointer"
        size="xl"
        :aria-label="`Switch to ${isDark ? 'light' : 'dark'} mode`"
        @click="handleToggleTheme"
      >
        <SunDim v-if="isDark" :style="{ color: 'yellow' }" />
        <MoonStar v-else :style="{ color: 'black' }" />
      </button>
    </div>
  </main>
</template>
