<template>
  <section :class="props.class">
    <v-menu>
      <template #activator="{ props: menu }">
        <VButton
          aria-label="Set system theme"
          density="compact"
          :icon="toggleButtonIcon"
          variant="text"
          v-bind="menu"
        />
      </template>
      <v-list :elevation="codeTable.elevation.DEFAULT">
        <v-list-item
          v-for="item in themeList"
          :key="item.name"
          class="hover:bg-surface"
        >
          <v-list-item-title
            :class="{ 'text-primary-500': getIsSelected(item.name) }"
            class="hover:cursor-pointer"
            @click="item.callback"
          >
            <v-icon
              :icon="item.icon"
              class="mr-1"
            />
            {{ capitalize(item.name) }}
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

  const store = useSystemStore();
  const systemTheme = useSystemTheme();

  const themeList = {
    light: {
      name: "light",
      icon: "i-mdi:weather-sunny",
      callback: () => {
        systemTheme.set(codeTable.themes.LIGHT);
      },
    },
    dark: {
      name: "dark",
      icon: "i-mdi:weather-night",
      callback: () => {
        systemTheme.set(codeTable.themes.DARK);
      },
    },
    system: {
      name: "system",
      icon: "i-mdi:monitor-small",
      callback: () => {
        systemTheme.set(codeTable.themes.SYSTEM);
      },
    },
  };

  onMounted(() => {
    if (!store.theme) systemTheme.set(codeTable.themes.SYSTEM);
  });

  const toggleButtonIcon = computed(() => {
    return systemTheme.getIsDark()
      ? "i-mdi:weather-night"
      : "i-mdi:weather-sunny";
  });

  function getIsSelected(currentTheme: string) {
    return currentTheme === systemTheme.getCurrent();
  }
</script>
