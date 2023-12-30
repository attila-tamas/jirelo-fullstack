<template>
  <v-container class="h-full">
    <header class="mx-auto mb-4 mt-8 w-fit">
      <FullLogo />
    </header>

    <v-sheet
      width="360"
      height="fit-content"
      :elevation="mobile ? 0 : 2"
      class="mx-auto p-8"
    >
      <header class="relative mb-4">
        <AutoAnimate>
          <v-tooltip
            v-if="state === 1"
            text="Return"
            location="top"
          >
            <template #activator="{ props }">
              <v-btn
                density="compact"
                icon="i-mdi:chevron-left"
                variant="text"
                class="!absolute bottom-[0.125rem] left-0"
                aria-label="Return"
                v-bind="props"
                @click="state = 0"
              />
            </template>
          </v-tooltip>
          <h1 class="h-9 text-center text-2xl font-semibold">Create account</h1>
        </AutoAnimate>
      </header>

      <main>
        <AutoAnimate>
          <RegistrationInitialForm
            v-if="state === 0"
            @submit="(s: number) => (state = s)"
          />
          <RegistrationMainForm v-else />
        </AutoAnimate>
      </main>

      <footer class="mt-4 text-center">
        <span> I have an account. </span>
        <NuxtLink
          to="/"
          class="font-semibold hover:border-b-2 hover:border-primary-500"
        >
          Sign in
        </NuxtLink>
      </footer>
    </v-sheet>
  </v-container>
</template>

<script lang="ts" setup>
  const state = ref(0);
  const { mobile } = useDisplay();
</script>
