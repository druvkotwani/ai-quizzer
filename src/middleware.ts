import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;

  // Define public paths that don't require authentication
  const isPublicPath =
    path === "/" ||
    path === "/sign-in" ||
    path === "/sign-up" ||
    path === "/features" ||
    path === "/pricing" ||
    path.startsWith("/api/auth");

  // Get the session token
  const token = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET,
  });

  // Redirect unauthenticated users to sign-in page if they try to access protected routes
  if (!token && !isPublicPath) {
    return NextResponse.redirect(new URL("/sign-in", req.url));
  }

  // Redirect authenticated users away from sign-in/sign-up pages
  if (token && (path === "/sign-in" || path === "/sign-up")) {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  return NextResponse.next();
}

// Configure which paths the middleware should run on
export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    "/((?!_next/static|_next/image|favicon.ico|public).*)",
  ],
};
