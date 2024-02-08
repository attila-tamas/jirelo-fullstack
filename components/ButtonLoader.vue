<template>
  <v-progress-circular
    indeterminate
    :size="props.progressSize"
    :width="props.progressWidth"
  />
  <span v-if="props.loadingText"> &nbsp; {{ props.loadingText }} </span>
</template>

<script lang="ts" setup>
  const props = defineProps({
    loadingText: {
      type: String,
      default: undefined,
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
