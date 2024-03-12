<template>
  <label>
    {{ props.label }}
    <v-text-field
      v-bind="$attrs"
      v-model="value"
      :append-inner-icon="appendInnerIcon"
      :type="type"
      hide-details
      :class="{ 'mt-1': props.label }"
      @focus="isFocused = true"
      @blur="isFocused = false"
      @keydown.enter="onKeydownEnter"
      @click:append-inner="onAppendInnerClicked()"
      @update:model-value="onModelValueUpdated()"
    />
    <InputSuggestion
      :suggestion="suggestion"
      @suggestion-accepted="onSuggestionAccepted()"
    />
  </label>
</template>

<script lang="ts" setup>
  const props = defineProps({
    appendInnerIcon: {
      type: String,
      default: undefined,
    },
    label: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "text",
      validator(value: string) {
        return ["email", "password", "text"].includes(value);
      },
    },
  });

  const value = defineModel<string>("value");

  const suggestion = ref("");
  const isFocused = ref(false);
  const isPasswordVisible = ref(false);
  const type = ref(props.type);

  const isTypeEmail = computed(() => {
    return props.type === "email";
  });
  const isTypePassword = computed(() => {
    return props.type === "password";
  });
  const appendInnerIcon = computed(() => {
    if (props.type === "password") {
      return isPasswordVisible.value
        ? "i-mdi:eye-off-outline"
        : "i-mdi:eye-outline";
    }
    return props.appendInnerIcon;
  });

  function onModelValueUpdated() {
    if (isTypeEmail) emailSpellCheck();
  }
  function emailSpellCheck() {
    const emailSuggestion = emailSpellChecker(value.value);
    if (emailSuggestion) suggestion.value = emailSuggestion;
    else suggestion.value = "";
  }

  function onAppendInnerClicked() {
    if (isTypePassword) togglePasswordVisiblity();
  }
  function togglePasswordVisiblity() {
    isPasswordVisible.value = !isPasswordVisible.value;
    type.value = isPasswordVisible.value ? "text" : "password";
  }

  function onKeydownEnter(event: Event) {
    if (suggestion.value && isFocused.value) {
      event.preventDefault();
      onSuggestionAccepted();
    }
  }
  function onSuggestionAccepted() {
    value.value = suggestion.value;
    suggestion.value = "";
  }
</script>
