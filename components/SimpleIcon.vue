<template>
  <section
    class="flex w-fit items-center"
    :class="{ 'gap-1.5': hasLabel }"
  >
    <v-icon
      v-bind="$attrs"
      :size="iconSize"
    />
    <span
      v-if="hasLabel"
      :class="labelSize"
    >
      {{ props.label }}
    </span>
  </section>
</template>

<script lang="ts" setup>
  const props = defineProps({
    label: {
      type: String,
      default: "",
    },
    size: {
      type: String,
      default: "base",
      validator(value: string) {
        return Object.keys(codeTable.iconSize).includes(value.toUpperCase());
      },
    },
  });

  const hasLabel = computed(() => {
    return !!props.label;
  });

  const iconSize = computed(() => {
    return codeTable.iconSize[
      props.size.toUpperCase() as keyof typeof codeTable.iconSize
    ];
  });

  const labelSize = computed(() => {
    switch (props.size) {
      case "xs":
        return "text-xs";
      case "sm":
        return "text-sm";
      default:
        return "text-base";
    }
  });
</script>
