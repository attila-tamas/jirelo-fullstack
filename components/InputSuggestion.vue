<template>
  <AutoAnimate>
    <v-alert
      v-if="props.suggestion"
      color="neutral-400"
    >
      <section class="break-all">
        <span>Did you mean </span>
        <span
          class="underline hover:cursor-pointer hover:text-neutral-950"
          @click="emit('suggestionAccepted')"
        >
          {{ props.suggestion }}
        </span>
        <span>?</span>
      </section>
    </v-alert>
  </AutoAnimate>
</template>

<script lang="ts" setup>
  const props = defineProps({
    suggestion: {
      type: String,
      required: true,
    },
  });

  const emit = defineEmits(["suggestionAccepted"]);
</script>
