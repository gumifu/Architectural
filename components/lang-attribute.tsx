"use client";

import { isValidLocale } from "@/lib/i18n/config";
import { useParams } from "next/navigation";
import { useEffect } from "react";

export function LangAttribute() {
  const params = useParams();
  const locale = params?.locale as string | undefined;

  useEffect(() => {
    if (typeof document === "undefined" || !locale) return;
    if (isValidLocale(locale)) {
      document.documentElement.lang = locale;
    }
  }, [locale]);

  return null;
}
