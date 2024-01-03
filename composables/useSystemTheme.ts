export default () => {
  const store = useSystemStore();
  const theme = useTheme();

  const colorScheme = ref(codeTable.themes.LIGHT);

  watch(colorScheme, async () => {
    theme.global.name.value = getTheme();
    store.theme = colorScheme.value;
  });

  function getTheme(): string {
    if (colorScheme.value === codeTable.themes.SYSTEM) {
      return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? codeTable.themes.DARK
        : codeTable.themes.LIGHT;
    }
    return colorScheme.value;
  }

  return {
    getCurrent: (): string => {
      return store.theme;
    },
    getIsDark: (): boolean => {
      return theme.global.current.value.dark;
    },
    set: (newValue: string): void => {
      if (colorScheme.value !== newValue) colorScheme.value = newValue;
    },
  };
};
