<template>
  <v-btn
    v-bind="$attrs"
    :color="color"
    :loading="loading"
  >
    <template #loader>
      <ButtonLoader :loading-text="props.loadingText" />
    </template>
  </v-btn>
</template>

<script lang="ts" setup>
  const props = defineProps({
    color: {
      type: String,
      default: undefined,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    loadingText: {
      type: String,
      default: undefined,
    },
  });

  const color = computed(() => {
    return props.loading ? "on-background" : props.color;
  });
</script>
