<template>
  <v-form
    v-model="form"
    class="flex flex-col gap-3"
    @submit.prevent="onSubmit()"
  >
    <InputField
      v-model:input-value="email"
      label="Email address"
      type="email"
      autofocus
    />
    <v-btn
      text="Continue"
      color="primary-500"
      type="submit"
      block
      class="mt-2"
    />
  </v-form>
</template>

<script lang="ts" setup>
  const form = ref(false);
  const email = ref("");

  const emit = defineEmits(["submit"]);

  function onSubmit() {
    emit("submit", 1);
  }
</script>
