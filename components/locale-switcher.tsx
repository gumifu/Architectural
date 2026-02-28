"use client";

import { useLocale } from "@/contexts/locale-context";
import type { Locale } from "@/lib/i18n/config";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function LocaleSwitcher() {
  const { locale } = useLocale();
  const pathname = usePathname();

  const switchTo: Locale = locale === "ja" ? "en" : "ja";
  const pathWithoutLocale = pathname.replace(/^\/[a-z]{2}(\/|$)/, "$1") || "";
  const newPath = `/${switchTo}${pathWithoutLocale ? `/${pathWithoutLocale}` : ""}`;

  return (
    <Link
      href={newPath}
      className="inline-flex items-center gap-1.5 rounded p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-700 dark:hover:text-white"
    >
      {switchTo === "ja" ? "日本語" : "English"}
    </Link>
  );
}
