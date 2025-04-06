import { NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function middleware(req: Request) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  const { pathname } = new URL(req.url);

  // Allow requests to public routes and NextAuth routes
  if (pathname.startsWith('/api/auth') || pathname.startsWith('/sign-in')) {
    return NextResponse.next();
  }

  // Redirect unauthenticated users to the sign-in page
  if (!token) {
    const url = new URL('/sign-in', req.url);
    return NextResponse.redirect(url);
  }

  // Allow authenticated requests to proceed
  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*'], // Protect all routes under "/dashboard"
};
