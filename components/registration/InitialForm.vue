<template>
  <v-form
    v-model="form"
    class="flex flex-col gap-3"
  >
    <InputField
      v-model:value="registrationStore.email"
      label="Email address"
      type="email"
      autofocus
    />
    <VButton
      text="Continue"
      color="primary-500"
      type="submit"
      block
      class="mt-2"
      @click="registrationStore.nextFormState()"
    />
  </v-form>
</template>

<script lang="ts" setup>
  const registrationStore = useRegistrationStore();
  const form = ref(false);
</script>
