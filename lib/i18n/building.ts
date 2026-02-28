import { defaultLocale, type Locale } from "./config";

export interface LocalizedText {
  ja: string;
  en: string;
}

export interface BuildingData {
  id: string;
  title: LocalizedText;
  description: LocalizedText;
}

export function getLocalizedBuilding<
  T extends { title: LocalizedText; description: LocalizedText },
>(building: T, locale: Locale): { title: string; description: string } {
  const fallback = defaultLocale;
  return {
    title: building.title[locale] ?? building.title[fallback] ?? "",
    description:
      building.description[locale] ?? building.description[fallback] ?? "",
  };
}
