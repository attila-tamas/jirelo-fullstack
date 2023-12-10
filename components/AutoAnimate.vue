<template>
  <section v-auto-animate="{ duration: props.animationDuration }">
    <slot />
  </section>
</template>

<script lang="ts" setup>
  const props = defineProps({
    animationDuration: {
      type: Number,
      default: 200,
    },
  });
</script>
