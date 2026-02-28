export type Locale = "ja" | "en";

export const locales: Locale[] = ["ja", "en"];
export const defaultLocale: Locale = "ja";

export function isValidLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}
