<template>
  <v-sheet
    v-bind="$attrs"
    class="!bg-neutral-50 p-8 !text-black dark:!bg-neutral-800 dark:!text-white"
    :class="props.class"
  >
    <slot />
  </v-sheet>
</template>

<script lang="ts" setup>
  const props = defineProps({
    class: {
      type: [Object, String],
      default: "",
    },
  });
</script>
