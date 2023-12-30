<template>
  <AutoAnimate>
    <v-alert
      v-if="props.show"
      color="neutral-400"
    >
      <slot name="hint" />
    </v-alert>
  </AutoAnimate>
</template>

<script lang="ts" setup>
  const props = defineProps({
    show: {
      type: Boolean,
      default: false,
    },
  });
</script>
