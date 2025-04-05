import { NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function middleware(req: Request) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  const { pathname } = new URL(req.url);

  // Exclude the /sign-in route from middleware checks
  if (pathname.startsWith('/sign-in')) {
    return NextResponse.next();
  }

  // If no token is found, redirect to the sign-in page
  if (!token) {
    const url = new URL('/sign-in', req.url);
    return NextResponse.redirect(url);
  }

  // Allow the request to proceed if the user is authenticated
  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*'], // Protect all routes under "/dashboard"
};
