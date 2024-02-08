<template>
  <NuxtLink
    v-bind="$attrs"
    class="font-semibold hover:border-b-2 hover:border-primary-500"
  >
    {{ props.label }}
  </NuxtLink>
</template>

<script lang="ts" setup>
  const props = defineProps({
    label: {
      type: String,
      required: true,
    },
  });
</script>
