<template>
  <div>
    <NuxtLayout>
      <v-app>
        <NuxtPage />
      </v-app>
    </NuxtLayout>
  </div>
</template>

<script lang="ts" setup>
  const systemTheme = useSystemTheme();
  onMounted(() => {
    systemTheme.set(codeTable.theme.SYSTEM);
  });
</script>
