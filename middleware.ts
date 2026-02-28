import { defaultLocale } from "@/lib/i18n/config";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  if (pathname === "/") {
    return NextResponse.redirect(new URL(`/${defaultLocale}`, request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next|images|.*\\..*).*)"],
};
