<template>
  <v-form
    v-model="form"
    class="flex flex-col gap-3"
  >
    <InputField
      v-model:value="store.email"
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
      @click="store.nextFormState()"
    />
  </v-form>
</template>

<script lang="ts" setup>
  const store = useRegistrationStore();
  const form = ref(false);
</script>
