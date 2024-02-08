<template>
  <v-container
    v-bind="$attrs"
    class="h-full !bg-neutral-100 dark:!bg-neutral-900"
    :class="props.class"
  >
    <slot />
  </v-container>
</template>

<script lang="ts" setup>
  const props = defineProps({
    class: {
      type: [Object, String],
      default: "",
    },
  });
</script>
