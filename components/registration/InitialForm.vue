<template>
  <v-form
    v-model="form"
    validate-on="blur lazy"
    class="flex flex-col gap-3"
    @submit.prevent="onSubmit()"
  >
    <label>
      Email address
      <v-text-field
        v-model="email"
        type="email"
        :rules="[rules.emailRequired, rules.emailValid]"
        autofocus
        class="mt-1"
      />
    </label>

    <v-btn
      text="Continue"
      color="primary-500"
      block
      type="submit"
    />
  </v-form>
</template>

<script lang="ts" setup>
  const form = ref(false);
  const email = ref(null);

  const rules = ref({
    emailRequired: requiredRule("Email is required"),
    emailValid: emailRule("Invalid email"),
  });

  const emit = defineEmits(["submit"]);

  function onSubmit() {
    if (form.value) emit("submit", 1);
  }
</script>
