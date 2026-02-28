"use client";

import { useLocale } from "@/contexts/locale-context";

export function LandingHero() {
  const { t } = useLocale();

  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl dark:text-white">
        {t.home.title}
      </h1>
      <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-400">
        {t.home.subtitle}
      </p>
    </div>
  );
}
