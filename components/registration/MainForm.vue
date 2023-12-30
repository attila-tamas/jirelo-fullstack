<template>
  <v-form
    v-model="form"
    :readonly="isLoading"
    class="flex flex-col gap-3"
    @submit.prevent="onSubmit()"
  >
    <InputField
      v-model:input-value="fullName"
      label="Full name"
      type="text"
      autofocus
    />
    <InputField
      v-model:input-value="username"
      label="Username"
      type="text"
    />
    <InputField
      v-model:input-value="email"
      label="Email address"
      type="email"
    />
    <InputField
      v-model:value="password"
      label="Password"
      type="password"
    />
    <v-btn
      :disabled="isLoading"
      :loading="isLoading"
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
  const isPasswordVisible = ref(false);

  const form = ref(false);
  const email = ref("");
  const password = ref("");
  const username = ref("");
  const fullName = ref("");

  const isLoading = ref(false);

  function onSubmit() {
    isLoading.value = true;
    setTimeout(() => (isLoading.value = false), 2000);
  }
</script>
