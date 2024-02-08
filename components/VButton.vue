<template>
  <v-btn
    v-bind="$attrs"
    :color="color"
    :loading="loading"
    :variant="variant"
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
    variant: {
      type: String,
      default: "primary",
      validator(value: string) {
        return ["primary", "secondary", "tertiary"].includes(value);
      },
    },
  });

  const variant = computed(() => {
    switch (props.variant) {
      case "secondary":
        return "outlined";

      case "tertiary":
        return "text";

      default:
      case "primary":
        return "elevated";
    }
  });

  const color = computed(() => {
    return props.loading ? "on-background" : props.color;
  });
</script>
