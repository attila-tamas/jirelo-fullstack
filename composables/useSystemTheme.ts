export default () => {
  const systemStore = useSystemStore();
  const theme = useTheme();
  const colorMode = useColorMode();

  const colorScheme = ref("");

  watch(colorScheme, async () => {
    theme.global.name.value = getTheme();
    colorMode.preference = systemStore.theme = colorScheme.value;
  });

  function getTheme(): string {
    if (colorScheme.value === codeTable.theme.SYSTEM) {
      return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? codeTable.theme.DARK
        : codeTable.theme.LIGHT;
    }
    return colorScheme.value;
  }

  return {
    getCurrent: (): string => {
      return systemStore.theme;
    },
    getIsDark: (): boolean => {
      return theme.global.current.value.dark;
    },
    set: (newValue: string): void => {
      colorScheme.value = newValue;
    },
  };
};
