export function requiredRule(errorMessage: string) {
  return (value: string) => !!value || errorMessage;
}

export function emailRule(errorMessage: string) {
  return (value: string) => /.+@.+\..+/.test(value) || errorMessage;
}
