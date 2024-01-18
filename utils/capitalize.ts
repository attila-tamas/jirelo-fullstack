export default (string: string): string => {
  return string.toLowerCase().charAt(0).toUpperCase() + string.slice(1);
};
