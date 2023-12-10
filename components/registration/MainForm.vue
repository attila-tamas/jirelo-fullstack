<template>
  <v-form
    v-model="form"
    validate-on="blur lazy"
    class="flex flex-col gap-1"
    @submit.prevent="onSubmit()"
  >
    <label>
      Full name
      <v-text-field
        v-model="fullName"
        :readonly="isLoading"
        :rules="[rules.fullNameRequired]"
        autofocus
        class="mt-1"
      />
    </label>
    <label>
      Username
      <v-text-field
        v-model="username"
        :readonly="isLoading"
        :rules="[rules.usernameReqiuired]"
        class="mt-1"
      />
    </label>
    <label>
      Email address
      <v-text-field
        v-model="email"
        :readonly="isLoading"
        type="email"
        :rules="[rules.emailRequired, rules.emailValid]"
        class="mt-1"
      >
      </v-text-field>
    </label>
    <label>
      Password
      <v-text-field
        v-model="password"
        :readonly="isLoading"
        :type="isPasswordVisible ? 'text' : 'password'"
        :append-inner-icon="
          isPasswordVisible ? 'mdi-eye-off-outline' : 'mdi-eye-outline'
        "
        :rules="[rules.passwordRequired]"
        class="mt-1"
        @click:append-inner="isPasswordVisible = !isPasswordVisible"
      />
    </label>

    <v-btn
      :disabled="isLoading"
      :loading="isLoading"
      text="Create account"
      color="primary-500"
      block
      type="submit"
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
  const email = ref(null);
  const password = ref(null);
  const username = ref(null);
  const fullName = ref(null);

  const rules = ref({
    fullNameRequired: requiredRule("Full name is required"),
    usernameReqiuired: requiredRule("Username is required"),
    emailRequired: requiredRule("Email is required"),
    emailValid: emailRule("Invalid email"),
    passwordRequired: requiredRule("Password is required"),
  });

  const isLoading = ref(false);

  function onSubmit() {
    if (!form.value) return;

    isLoading.value = true;
    setTimeout(() => (isLoading.value = false), 2000);
  }
</script>
