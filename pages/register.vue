<template>
  <PageContainer :class="{ '!bg-neutral-50': mobile }">
    <header class="mx-auto mb-4 mt-8 w-fit">
      <FullLogo />
    </header>

    <SimpleSheet
      width="360"
      height="fit-content"
      :elevation="elevation"
      class="mx-auto"
      :class="{ 'dark:!bg-neutral-900': mobile }"
    >
      <header class="relative mb-4">
        <AutoAnimate>
          <v-tooltip
            v-if="!isFirstStep"
            text="Return"
            location="top"
          >
            <template #activator="{ props }">
              <VButton
                density="compact"
                icon="i-mdi:chevron-left"
                variant="tertiary"
                class="!absolute bottom-[0.125rem] left-0"
                aria-label="Return"
                v-bind="props"
                @click="registrationStore.previousFormState()"
              />
            </template>
          </v-tooltip>
          <h1 class="h-9 text-center text-2xl font-semibold">Create account</h1>
        </AutoAnimate>
      </header>

      <main>
        <AutoAnimate>
          <RegistrationInitialForm v-if="isFirstStep" />
          <RegistrationMainForm v-else />
        </AutoAnimate>
      </main>

      <footer class="mt-4 text-center">
        <span> I have an account. </span>
        <NavLink
          to="/"
          label="Sign in"
        />
      </footer>
    </SimpleSheet>
  </PageContainer>
</template>

<script lang="ts" setup>
  const registrationStore = useRegistrationStore();

  const { mobile } = useDisplay();

  const elevation = ref(codeTable.elevation.FLAT);
  watch(mobile, (newValue) => {
    elevation.value = newValue
      ? codeTable.elevation.FLAT
      : codeTable.elevation.DEFAULT;
  });

  const isFirstStep = computed(() => {
    return registrationStore.formState === codeTable.registrationForm.STEP_ONE;
  });
</script>
