<template>
  <v-progress-circular
    indeterminate
    :size="props.progressSize"
    :width="props.progressWidth"
  />
  &nbsp; {{ props.loadingText }}
</template>

<script lang="ts" setup>
  const props = defineProps({
    loadingText: {
      type: String,
      required: true,
    },
    progressSize: {
      type: Number,
      default: 20,
    },
    progressWidth: {
      type: Number,
      default: 3,
    },
  });
</script>
