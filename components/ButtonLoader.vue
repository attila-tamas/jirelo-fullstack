<template>
  <v-progress-circular
    indeterminate
    :size="20"
    :width="3"
  />
  &nbsp; {{ props.text }}
</template>

<script lang="ts" setup>
  const props = defineProps({
    text: {
      type: String,
      required: true,
    },
  });
</script>
