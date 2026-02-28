import { LangAttribute } from "@/components/lang-attribute";
import { LocaleProvider } from "@/contexts/locale-context";
import type { Locale } from "@/lib/i18n/config";
import { isValidLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { PropsWithChildren } from "react";

type Props = PropsWithChildren<{ params: Promise<{ locale: string }> }>;

export async function generateStaticParams() {
  return [{ locale: "ja" }, { locale: "en" }];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? "https://example.com";
  return {
    alternates: {
      canonical: `${baseUrl}/${locale}`,
      languages: {
        ja: `${baseUrl}/ja`,
        en: `${baseUrl}/en`,
      },
    },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale: localeParam } = await params;
  if (!isValidLocale(localeParam)) notFound();
  const locale: Locale = localeParam;
  const dictionary = getDictionary(locale);

  return (
    <>
      <LangAttribute />
      <LocaleProvider initialLocale={locale} initialDictionary={dictionary}>
        {children}
      </LocaleProvider>
    </>
  );
}
