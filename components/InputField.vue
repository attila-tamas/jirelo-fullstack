<template>
  <label>
    {{ props.label }}
    <v-text-field
      v-model="inputValue"
      :autofocus="props.autofocus"
      :append-inner-icon="props.appendInnerIcon"
      :readonly="props.readonly"
      :type="props.type"
      hide-details
      :class="{ 'mt-1': props.label }"
      @focus="isFocused = true"
      @blur="isFocused = false"
      @keydown.enter="isFocused && onSuggestionAccepted()"
      @click:append-inner="emit('appendInnerClicked')"
      @update:model-value="isTypeEmail && emailSpellCheck()"
    />
    <InputSuggestion
      :suggestion="suggestion"
      @suggestion-accepted="onSuggestionAccepted()"
    />
  </label>
</template>

<script lang="ts" setup>
  const props = defineProps({
    autofocus: {
      type: Boolean,
      default: false,
    },
    appendInnerIcon: {
      type: String,
      default: undefined,
    },
    label: {
      type: String,
      default: "",
    },
    readonly: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: "text",
      validator(value: string) {
        return ["email", "password", "text"].includes(value);
      },
    },
  });

  const emit = defineEmits(["appendInnerClicked"]);

  const inputValue = defineModel<string>("inputValue");

  const suggestion = ref("");
  const isFocused = ref(false);

  const isTypeEmail = computed(() => {
    return props.type === "email";
  });

  function emailSpellCheck() {
    const emailSuggestion = emailSpellChecker(inputValue.value);
    if (emailSuggestion) suggestion.value = emailSuggestion;
    else suggestion.value = "";
  }
  function onSuggestionAccepted() {
    inputValue.value = suggestion.value;
    suggestion.value = "";
  }
</script>
