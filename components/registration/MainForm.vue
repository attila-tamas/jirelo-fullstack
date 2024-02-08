<template>
  <v-form
    v-model="form"
    :readonly="registrationStore.isLoading"
    class="flex flex-col gap-3"
    @submit.prevent="onSubmit()"
  >
    <InputField
      v-model:value="registrationStore.fullName"
      label="Full name"
      type="text"
      autofocus
    />
    <InputField
      v-model:value="registrationStore.username"
      label="Username"
      type="text"
    />
    <InputField
      v-model:value="registrationStore.email"
      label="Email address"
      type="email"
    />
    <InputField
      v-model:value="registrationStore.password"
      label="Password"
      type="password"
    />
    <VButton
      :disabled="registrationStore.isLoading"
      :loading="registrationStore.isLoading"
      text="Create account"
      loading-text="Creating account..."
      color="primary-500"
      type="submit"
      block
      class="mt-2"
    />
  </v-form>
</template>

<script lang="ts" setup>
  const registrationStore = useRegistrationStore();

  const form = ref(false);

  function onSubmit() {
    registrationStore.isLoading = true;
    setTimeout(() => (registrationStore.isLoading = false), 2000);
  }
</script>
