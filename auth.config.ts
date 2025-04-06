import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
  providers: [],
  callbacks: {
    authorized({ request, auth }: any) {
      const protectedPaths = [/\/admin/];
      const { pathname } = request.nextUrl;
      if (!auth && protectedPaths.some((p) => p.test(pathname))) return false;

      return true;
    },
  },
  trustHost: true,
} satisfies NextAuthConfig;

// /\/shipping-address/,
// /\/payment-method/,
// /\/place-order/,
// /\/profile/,
// /\/user\/(.*)/,
// /\/order\/(.*)/,
// /\/admin/,
