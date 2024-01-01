<template>
  <v-btn v-bind="$attrs">
    <template #loader>
      <ButtonLoader :loading-text="props.loadingText" />
    </template>
  </v-btn>
</template>

<script lang="ts" setup>
  const props = defineProps({
    loadingText: {
      type: String,
      default: undefined,
    },
  });
</script>
