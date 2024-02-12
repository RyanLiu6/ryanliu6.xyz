import { NextRequest, NextResponse } from "next/server";

export const config = {
  matcher: [
    /*
    * Match all request paths except for the ones starting with:
    * - api (API routes)
    * - _next/static (static files)
    * - _next/image (image optimization files)
    * - favicon.ico (favicon file)
    */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};

export default function middleware(request: NextRequest) {
  let hostname = request.headers.get("host")!;

  console.log(`Hostname: ${hostname}`)

  // If hostname is either localhost or public domain, then we just redirect to root
  if (hostname === "localhost:3000" || hostname === process.env.NEXT_PUBLIC_ROOT_DOMAIN) {
    let path = request.nextUrl.pathname;
    console.log(`Regular Pattern found, directing to ${path}`);
    if(path === "/") {
        return NextResponse.rewrite(new URL(path, request.url));
    } else {
        return NextResponse.rewrite(new URL(`${path}`, request.url));
    }
  }

  // Else, we direct whatever.domain.com to domain.com/whatever
  let path = hostname.split(".")[0]
  console.log(`Rewriting to ${path}`)
  return NextResponse.rewrite(new URL(`/${path}`, request.url));
}
