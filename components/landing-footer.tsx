"use client";

import { useLocale } from "@/contexts/locale-context";
import Link from "next/link";

export function LandingFooter() {
  const { locale, t } = useLocale();

  return (
    <footer className="border-t border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <Link
            href={`/${locale}`}
            className="text-lg font-bold text-gray-900 dark:text-white"
          >
            建築探訪
          </Link>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
