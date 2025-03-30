import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';

import { DropdownMenu } from '@/components/ui/dropdown-menu';
import Link from 'next/link';
import { Settings } from 'lucide-react';
import { UserButton } from '@clerk/nextjs';
import { currentUser } from '@clerk/nextjs/server';

// TODO: Fix issue with image resizing when adjusting screen size

export async function NavUser() {
  const sessionUser = await currentUser();
  if (!sessionUser) return <div>Not signed in</div>;
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <SidebarMenuButton
            size="lg"
            className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
          >
            <UserButton />
            <div className="grid flex-1 text-left text-sm leading-tight">
              <span className="truncate font-medium">
                {sessionUser?.firstName}
              </span>
              <span className="text-muted-foreground truncate text-xs">
                {sessionUser?.emailAddresses
                  ?.map((email) => email.emailAddress)
                  .join(', ')}
              </span>
            </div>
            <Link href="/dashboard/settings">
              {' '}
              <Settings />
            </Link>
          </SidebarMenuButton>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
