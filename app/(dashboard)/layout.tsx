import { SidebarProvider } from "@/contexts/sidebar-context";
import { sidebarCookie } from "@/lib/sidebar-cookie";
import type { PropsWithChildren } from "react";
import { LayoutContent } from "./layout-content";
import { DashboardNavbar } from "./navbar";
import { DashboardSidebar } from "./sidebar";

export default async function DashboardLayout({ children }: PropsWithChildren) {
  let initialCollapsed = false;
  try {
    const sidebarCookieData = await sidebarCookie.get();
    initialCollapsed = Boolean(sidebarCookieData?.isCollapsed);
  } catch {
    // cookies() may be unavailable in some environments
  }

  return (
    <SidebarProvider initialCollapsed={initialCollapsed}>
      <DashboardNavbar />
      <div className="mt-16 flex items-start">
        <DashboardSidebar />
        <LayoutContent>{children}</LayoutContent>
      </div>
    </SidebarProvider>
  );
}
