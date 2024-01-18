<template>
  <section :class="props.class">
    <v-menu>
      <template #activator="{ props: menu }">
        <VButton
          aria-label="Set system theme"
          color="neutral-400"
          density="compact"
          :icon="toggleButtonIcon"
          variant="text"
          v-bind="menu"
        />
      </template>
      <v-list
        density="compact"
        :elevation="codeTable.elevation.DEFAULT"
      >
        <v-list-item
          v-for="item in themeList"
          :key="item.name"
          :value="item.name"
          @click="item.callback"
        >
          <v-list-item-title
            :class="[
              '!text-sm',
              '!font-semibold',
              { 'text-primary-400': getIsSelected(item.name) },
            ]"
          >
            <v-icon
              class="mr-1.5"
              :color="getIsSelected(item.name) ? 'currentColor' : 'neutral-400'"
              :icon="item.icon"
            />
            <span>{{ capitalize(item.name) }}</span>
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </section>
</template>

<script lang="ts" setup>
  const props = defineProps({
    class: {
      type: String,
      default: undefined,
    },
  });

  const systemTheme = useSystemTheme();

  const themeList = {
    light: {
      name: "light",
      icon: "i-mdi:weather-sunny",
      callback: () => {
        systemTheme.set(codeTable.theme.LIGHT);
      },
    },
    dark: {
      name: "dark",
      icon: "i-mdi:weather-night",
      callback: () => {
        systemTheme.set(codeTable.theme.DARK);
      },
    },
    system: {
      name: "system",
      icon: "i-mdi:monitor-small",
      callback: () => {
        systemTheme.set(codeTable.theme.SYSTEM);
      },
    },
  };

  const toggleButtonIcon = computed(() => {
    return systemTheme.getIsDark()
      ? "i-mdi:weather-night"
      : "i-mdi:weather-sunny";
  });

  function getIsSelected(currentTheme: string) {
    return currentTheme === systemTheme.getCurrent();
  }
</script>
