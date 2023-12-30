import emailSpellChecker from "@zootools/email-spell-checker";

export default (email: string | undefined): string | null => {
  if (!email) return null;

  const suggestion = emailSpellChecker.run({ email });

  if (!suggestion) return null;
  return suggestion.full;
};
