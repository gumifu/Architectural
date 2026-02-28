import en from "@/messages/en.json";
import ja from "@/messages/ja.json";
import { defaultLocale, type Locale } from "./config";

const dictionaries: Record<Locale, typeof ja> = { ja, en };

export type Dictionary = typeof ja;

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? dictionaries[defaultLocale];
}
