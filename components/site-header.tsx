'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Separator } from '@/components/ui/separator';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { usePathname } from 'next/navigation';

export function SiteHeader() {
  const pathname = usePathname();

  // Extract the page name from the pathname
  const pageName =
    pathname
      .split('/')
      .filter(Boolean) // Remove empty strings
      .pop() // Get the last part of the path
      ?.replace(/-/g, ' ') // Replace dashes with spaces
      .replace(/\b\w/g, (char) => char.toUpperCase()) || 'Home'; // Capitalize first letter

  return (
    <header className="flex h-(--header-height) shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
        <SidebarTrigger className="-ml-1 text-cyan-500" />
        <Separator
          orientation="vertical"
          className="mx-2  data-[orientation=vertical]:h-4 bg-cyan-500"
        />
        {/* Dynamically set the page name */}
        <h1 className="text-base font-medium text-cyan-500">{pageName}</h1>
        <div className="ml-auto flex items-center gap-2">
          <Button variant="ghost" asChild size="sm" className="hidden sm:flex">
            <Link
              href="https://github.com/shadcn-ui/ui/tree/main/apps/v4/app/(examples)/dashboard"
              rel="noopener noreferrer"
              target="_blank"
              className="dark:text-foreground"
            >
              GitHub
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
