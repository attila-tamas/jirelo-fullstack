<template>
  <v-form
    v-model="form"
    :readonly="store.isLoading"
    class="flex flex-col gap-3"
    @submit.prevent="onSubmit()"
  >
    <InputField
      v-model:value="store.fullName"
      label="Full name"
      type="text"
      autofocus
    />
    <InputField
      v-model:value="store.username"
      label="Username"
      type="text"
    />
    <InputField
      v-model:value="store.email"
      label="Email address"
      type="email"
    />
    <InputField
      v-model:value="store.password"
      label="Password"
      type="password"
    />
    <v-btn
      :disabled="store.isLoading"
      :loading="store.isLoading"
      text="Create account"
      color="primary-500"
      type="submit"
      block
      class="mt-2"
    >
      <template #loader>
        <ButtonLoader loading-text="Creating account..." />
      </template>
    </v-btn>
  </v-form>
</template>

<script lang="ts" setup>
  const store = useRegistrationStore();

  const form = ref(false);

  function onSubmit() {
    store.isLoading = true;
    setTimeout(() => (store.isLoading = false), 2000);
  }
</script>
