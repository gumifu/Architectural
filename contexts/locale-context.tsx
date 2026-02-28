"use client";

import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import type { PropsWithChildren } from "react";
import { createContext, useContext } from "react";

interface LocaleContextValue {
  locale: Locale;
  t: Dictionary;
}

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function LocaleProvider({
  children,
  initialLocale,
  initialDictionary,
}: PropsWithChildren<{
  initialLocale: Locale;
  initialDictionary: Dictionary;
}>) {
  return (
    <LocaleContext.Provider
      value={{ locale: initialLocale, t: initialDictionary }}
    >
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used within LocaleProvider");
  return ctx;
}
