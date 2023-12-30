export const useRegistrationStore = defineStore("registration", {
  state: () => ({
    formState: codeTable.registrationForm.STEP_ONE,
    isLoading: false,
    email: "",
    fullName: "",
    password: "",
    username: "",
  }),
  actions: {
    previousFormState() {
      this.formState = codeTable.registrationForm.STEP_ONE;
    },
    nextFormState() {
      this.formState = codeTable.registrationForm.STEP_TWO;
    },
  },
});
