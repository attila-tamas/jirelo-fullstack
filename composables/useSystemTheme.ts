export default () => {
  const systemStore = useSystemStore();
  const theme = useTheme();
  const colorMode = useColorMode();

  watch(colorMode, () => {
    theme.global.name.value = systemStore.theme = colorMode.value;
  });

  return {
    getCurrent: (): string => {
      return colorMode.value;
    },
    set: (newValue: string): void => {
      colorMode.preference = newValue;
    },
  };
};
