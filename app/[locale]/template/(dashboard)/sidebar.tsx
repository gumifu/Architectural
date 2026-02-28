"use client";

import { useLocale } from "@/contexts/locale-context";
import { useSidebarContext } from "@/contexts/sidebar-context";
import type { Locale } from "@/lib/i18n/config";
import {
  Dropdown,
  Sidebar,
  SidebarCollapse,
  SidebarItem as SidebarItemDefault,
  SidebarItemGroup,
  SidebarItems,
  TextInput,
  Tooltip,
} from "flowbite-react";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import type { ComponentProps, FC, HTMLAttributeAnchorTarget } from "react";
import { useEffect, useState } from "react";
import {
  HiAdjustments,
  HiChartPie,
  HiClipboardList,
  HiCog,
  HiCollection,
  HiDocumentReport,
  HiInboxIn,
  HiLockClosed,
  HiSearch,
  HiShoppingBag,
  HiSupport,
  HiUsers,
  HiViewGrid,
} from "react-icons/hi";
import { twMerge } from "tailwind-merge";

interface SidebarItem {
  href?: string;
  target?: HTMLAttributeAnchorTarget;
  icon?: FC<ComponentProps<"svg">>;
  label: string;
  items?: SidebarItem[];
  badge?: string;
}

interface SidebarItemProps extends SidebarItem {
  pathname: string;
}

export function DashboardSidebar() {
  return (
    <>
      <div className="lg:hidden">
        <MobileSidebar />
      </div>
      <div className="hidden lg:block">
        <DesktopSidebar />
      </div>
    </>
  );
}

function getPages(locale: Locale): SidebarItem[] {
  const p = (path: string) => `/${locale}${path}`;
  return [
    { href: p("/template"), icon: HiChartPie, label: "Dashboard" },
    {
      href: p("/template/design-system"),
      icon: HiCollection,
      label: "Design System",
    },
    { href: p("/template/kanban"), icon: HiViewGrid, label: "Kanban" },
    {
      href: p("/template/mailing/inbox"),
      icon: HiInboxIn,
      label: "Inbox",
      badge: "3",
    },
    {
      icon: HiShoppingBag,
      label: "E-commerce",
      items: [
        { href: p("/template/e-commerce/products"), label: "Products" },
        { href: p("/template/e-commerce/billing"), label: "Billing" },
        { href: p("/template/e-commerce/invoice"), label: "Invoice" },
      ],
    },
    {
      icon: HiUsers,
      label: "Users",
      items: [
        { href: p("/template/users/list"), label: "Users list" },
        { href: p("/template/users/profile"), label: "Profile" },
        { href: p("/template/users/feed"), label: "Feed" },
        { href: p("/template/users/settings"), label: "Settings" },
      ],
    },
    {
      icon: HiDocumentReport,
      label: "Pages",
      items: [
        { href: p("/pages/pricing"), label: "Pricing" },
        { href: p("/pages/maintenance"), label: "Maintenace" },
        { href: p("/pages/404"), label: "404 not found" },
        { href: p("/pages/500"), label: "500 server error" },
      ],
    },
    {
      icon: HiLockClosed,
      label: "Authentication",
      items: [
        { href: p("/authentication/sign-in"), label: "Sign in" },
        { href: p("/authentication/sign-up"), label: "Sign up" },
        {
          href: p("/authentication/forgot-password"),
          label: "Forgot password",
        },
        { href: p("/authentication/reset-password"), label: "Reset password" },
        { href: p("/authentication/profile-lock"), label: "Profile lock" },
      ],
    },
  ];
}

function DesktopSidebar() {
  const pathname = usePathname();
  const params = useParams();
  const locale = (params?.locale as Locale) ?? "ja";
  const { isCollapsed, setCollapsed } = useSidebarContext().desktop;
  const pagesWithLocale = getPages(locale);
  const [isPreview, setIsPreview] = useState(isCollapsed);

  useEffect(() => {
    if (isCollapsed) setIsPreview(false);
  }, [isCollapsed]);

  const preview = {
    enable() {
      if (!isCollapsed) return;

      setIsPreview(true);
      setCollapsed(false);
    },
    disable() {
      if (!isPreview) return;

      setCollapsed(true);
    },
  };

  return (
    <Sidebar
      onMouseEnter={preview.enable}
      onMouseLeave={preview.disable}
      aria-label="Sidebar with multi-level dropdown example"
      collapsed={isCollapsed}
      className={twMerge(
        "fixed inset-y-0 left-0 z-20 flex h-full shrink-0 flex-col border-r border-gray-200 pt-16 duration-75 sm:flex lg:flex dark:border-gray-700",
        isCollapsed && "hidden w-16",
      )}
      id="sidebar"
    >
      <div className="flex h-full flex-col justify-between">
        <div className="py-2">
          <SidebarItems>
            <SidebarItemGroup className="mt-0 border-t-0 pt-0 pb-1">
              {pagesWithLocale.map((item) => (
                <SidebarItem key={item.label} {...item} pathname={pathname} />
              ))}
            </SidebarItemGroup>
            <SidebarItemGroup className="mt-2 pt-2">
              {externalPages.map((item) => (
                <SidebarItem key={item.label} {...item} pathname={pathname} />
              ))}
            </SidebarItemGroup>
          </SidebarItems>
        </div>
        <BottomMenu isCollapsed={isCollapsed} locale={locale} />
      </div>
    </Sidebar>
  );
}

function MobileSidebar() {
  const pathname = usePathname();
  const params = useParams();
  const locale = (params?.locale as Locale) ?? "ja";
  const { isOpen, close } = useSidebarContext().mobile;
  const pagesWithLocale = getPages(locale);

  if (!isOpen) return null;

  return (
    <>
      <Sidebar
        aria-label="Sidebar with multi-level dropdown example"
        className={twMerge(
          "fixed inset-y-0 left-0 z-20 hidden h-full shrink-0 flex-col border-r border-gray-200 pt-16 lg:flex dark:border-gray-700",
          isOpen && "flex",
        )}
        id="sidebar"
      >
        <div className="flex h-full flex-col justify-between">
          <div className="py-2">
            <form className="pb-3">
              <TextInput
                icon={HiSearch}
                type="search"
                placeholder="Search"
                required
                size={32}
              />
            </form>
            <SidebarItems>
              <SidebarItemGroup className="mt-0 border-t-0 pt-0 pb-1">
                {pagesWithLocale.map((item) => (
                  <SidebarItem key={item.label} {...item} pathname={pathname} />
                ))}
              </SidebarItemGroup>
              <SidebarItemGroup className="mt-2 pt-2">
                {externalPages.map((item) => (
                  <SidebarItem key={item.label} {...item} pathname={pathname} />
                ))}
              </SidebarItemGroup>
            </SidebarItems>
          </div>
          <BottomMenu isCollapsed={false} locale={locale} />
        </div>
      </Sidebar>
      <div
        onClick={close}
        aria-hidden="true"
        className="fixed inset-0 z-10 h-full w-full bg-gray-900/50 pt-16 dark:bg-gray-900/90"
      />
    </>
  );
}

function SidebarItem({
  href,
  // TODO: fix
  // target,
  icon,
  label,
  items,
  badge,
  pathname,
}: SidebarItemProps) {
  if (items) {
    const isOpen = items.some((item) => pathname.startsWith(item.href ?? ""));

    return (
      <SidebarCollapse
        icon={icon}
        label={label}
        open={isOpen}
        theme={{ list: "space-y-2 py-2 [&>li>div]:w-full" }}
      >
        {items.map((item) => (
          <SidebarItemDefault
            key={item.label}
            as={Link}
            href={item.href}
            // TODO: fix
            // target={item.target}
            className={twMerge(
              "justify-center *:font-normal",
              pathname === item.href && "bg-gray-100 dark:bg-gray-700",
            )}
          >
            {item.label}
          </SidebarItemDefault>
        ))}
      </SidebarCollapse>
    );
  }

  return (
    <SidebarItemDefault
      as={Link}
      href={href}
      // TODO: fix
      // target={target}
      icon={icon}
      label={badge}
      labelColor="blue"
      className={twMerge(pathname === href && "bg-gray-100 dark:bg-gray-700")}
    >
      {label}
    </SidebarItemDefault>
  );
}

function BottomMenu({
  isCollapsed,
  locale,
}: {
  isCollapsed: boolean;
  locale: Locale;
}) {
  return (
    <div
      className={twMerge(
        "flex items-center justify-center gap-4",
        isCollapsed && "flex-col",
      )}
    >
      <button className="inline-flex cursor-pointer justify-center rounded p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-700 dark:hover:text-white">
        <span className="sr-only">Tweaks</span>
        <HiAdjustments className="h-6 w-6" />
      </button>
      <Tooltip content="Settings page">
        <Link
          href={`/${locale}/template/users/settings`}
          className="inline-flex cursor-pointer justify-center rounded p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          <span className="sr-only">Settings page</span>
          <HiCog className="h-6 w-6" />
        </Link>
      </Tooltip>
      <div>
        <LanguageDropdown />
      </div>
    </div>
  );
}

const localeOptions: { value: Locale; label: string }[] = [
  { value: "ja", label: "日本語" },
  { value: "en", label: "English" },
];

function FlagJa({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <rect width="24" height="24" fill="#fff" />
      <circle cx="12" cy="12" r="5" fill="#bc002d" />
    </svg>
  );
}

function FlagEn({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <rect width="24" height="24" fill="#b22234" />
      <path fill="#fff" d="M0 2h24v2H0zm0 6h24v2H0zm0 6h24v2H0zm0 6h24v2H0z" />
      <rect width="9.6" height="10" fill="#3c3b6e" />
      <path
        fill="#fff"
        d="M1.5 1.8l.5 1.5H4L2.2 4.2l.5 1.5-1.3-1-1.3 1 .5-1.5L0 3.3h1.5zM5 1.8l.5 1.5H7.5L6.2 4.2l.5 1.5-1.3-1-1.3 1 .5-1.5L3.5 3.3H5z"
      />
    </svg>
  );
}

function LanguageDropdown() {
  const { locale } = useLocale();
  const pathname = usePathname();

  const pathForLocale = (targetLocale: Locale) =>
    pathname.replace(/^\/[a-z]{2}(\/|$)/, `/${targetLocale}$1`) ||
    `/${targetLocale}`;

  return (
    <Dropdown
      arrowIcon={false}
      inline
      label={
        <span className="inline-flex cursor-pointer items-center justify-center gap-1.5 rounded p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-700 dark:hover:text-white">
          <span className="sr-only">Current language</span>
          {locale === "ja" ? (
            <FlagJa className="h-5 w-5 shrink-0 rounded-sm" />
          ) : (
            <FlagEn className="h-5 w-5 shrink-0 rounded-sm" />
          )}
          <span className="text-sm font-medium">
            {locale === "ja" ? "日本語" : "EN"}
          </span>
        </span>
      }
    >
      <ul className="py-1" role="none">
        {localeOptions.map((opt) => (
          <li key={opt.value}>
            <Link
              href={pathForLocale(opt.value)}
              className={`flex w-full items-center gap-2 px-4 py-2 text-left text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white ${
                locale === opt.value
                  ? "text-primary-600 dark:text-primary-400 bg-gray-100 font-medium dark:bg-gray-600"
                  : "text-gray-700 dark:text-gray-400"
              }`}
            >
              {opt.value === "ja" ? (
                <FlagJa className="h-4 w-4 shrink-0 rounded-sm" />
              ) : (
                <FlagEn className="h-4 w-4 shrink-0 rounded-sm" />
              )}
              <span className="whitespace-nowrap">{opt.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </Dropdown>
  );
}

const externalPages: SidebarItem[] = [
  {
    href: "https://github.com/themesberg/flowbite-react/",
    target: "_blank",
    icon: HiClipboardList,
    label: "Docs",
  },
  {
    href: "https://flowbite-react.com/",
    target: "_blank",
    icon: HiCollection,
    label: "Components",
  },
  {
    href: "https://github.com/themesberg/flowbite-react/issues",
    target: "_blank",
    icon: HiSupport,
    label: "Help",
  },
];
