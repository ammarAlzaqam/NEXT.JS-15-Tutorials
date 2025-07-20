import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  //! cookies
  const response = NextResponse.next();
  const themePreference = request.cookies.get("theme");
  if (!themePreference) response.cookies.set("theme", "dark");

  //! headers
  response.headers.set("custom-header", "custom-value");

  return response;

  //! matchers redirect
  //return NextResponse.redirect(new URL("/", request.url));

  //! conditional redirect
  if (request.nextUrl.pathname.startsWith("/profile")) {
    // console.log({
    //   requestUrl: request.url, //* http://localhost:3000/profile
    //   requestNextUrl: request.nextUrl /**
    //   {
    //     href: 'http://localhost:3000/profile',
    //     origin: 'http://localhost:3000',
    //     pathname: '/profile',
    //   }
    //   */,
    // });
    return NextResponse.rewrite(new URL("/hello", request.nextUrl.origin));
  }
}

// export const config = {
//   matcher: "/profile",
// };
