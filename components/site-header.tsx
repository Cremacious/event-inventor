'use client';
import { useSidebar } from '@/components/ui/sidebar';
import { Separator } from '@/components/ui/separator';
import { usePathname } from 'next/navigation';
import { MenuIcon } from 'lucide-react';
import { Button } from './ui/button';

export function SiteHeader() {
  const pathname = usePathname();
  const { toggleSidebar } = useSidebar();
  // Extract the page name from the pathname
  const pageName =
    pathname
      .split('/')
      .filter(Boolean)
      .pop()
      ?.replace(/-/g, ' ')
      .replace(/\b\w/g, (char) => char.toUpperCase()) || 'Home';

  return (
    <header className="flex h-(--header-height) shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
      <div className="flex w-full items-center gap-1 pl-4 lg:gap-2 lg:px-6">
        <Button variant="ghost" onClick={toggleSidebar}>
          <MenuIcon className="h-4 w-4 text-cyan-500" />
          Menu
        </Button>
        <Separator
          orientation="vertical"
          className="mr-2 data-[orientation=vertical]:h-4 bg-cyan-500"
        />
        {/* Dynamically set the page name */}
        <h1 className="text-base font-medium">{pageName}</h1>
      </div>
    </header>
  );
}
