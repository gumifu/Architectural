"use client";

import { LocaleSwitcher } from "@/components/locale-switcher";
import { useLocale } from "@/contexts/locale-context";
import Link from "next/link";

export function LandingHeader() {
  const { locale, t } = useLocale();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-900">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href={`/${locale}`}
          className="flex items-center gap-2 text-xl font-bold text-gray-900 dark:text-white"
        >
          <span className="bg-primary-600 rounded-sm px-2 py-0.5 text-white">
            A
          </span>
          建築探訪
        </Link>

        <nav className="hidden gap-6 md:flex" aria-label="Main">
          <Link
            href="#find"
            className="hover:text-primary-600 dark:hover:text-primary-400 text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            {t.nav.findArchitecture}
          </Link>
          <Link
            href="#map"
            className="hover:text-primary-600 dark:hover:text-primary-400 text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            {t.nav.findFromMap}
          </Link>
          <Link
            href="#survey"
            className="hover:text-primary-600 dark:hover:text-primary-400 text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            {t.nav.survey}
          </Link>
          <Link
            href="#nearby"
            className="hover:text-primary-600 dark:hover:text-primary-400 text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            {t.nav.nearbyArchitecture}
          </Link>
          <Link
            href="#exploration"
            className="hover:text-primary-600 dark:hover:text-primary-400 text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            {t.nav.everyonesExploration}
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <LocaleSwitcher />
        </div>
      </div>
    </header>
  );
}
