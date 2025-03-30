'use client';

import * as React from 'react';

import {
  IconChartBar,
  IconDashboard,
  IconDatabase,
  IconFileWord,
  IconInnerShadowTop,
  IconListDetails,
  IconReport,
  IconSearch,
  IconSettings,
} from '@tabler/icons-react';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';

import Link from 'next/link';
import { NavDocuments } from '@/components/nav-documents';
import { NavMain } from '@/components/nav-main';
import { NavSecondary } from '@/components/nav-secondary';
import { NavUser } from '@/components/nav-user';

const data = {
  user: {
    name: 'shadcn',
    email: 'm@example.com',
    avatar: '/avatars/shadcn.jpg',
  },
  navMain: [
    {
      title: 'Dashboard',
      url: '/dashboard',
      icon: IconDashboard,
    },
    {
      title: 'Friends',
      url: 'dashboard/friends',
      icon: IconListDetails,
    },
    {
      title: 'My Events',
      url: 'dashboard/events',
      icon: IconChartBar,
    },
  ],

  navSecondary: [
    {
      title: 'Settings',
      url: '#',
      icon: IconSettings,
    },
    // {
    //   title: 'Get Help',
    //   url: '#',
    //   icon: IconHelp,
    // },
    {
      title: 'Search',
      url: '#',
      icon: IconSearch,
    },
  ],
  documents: [
    {
      name: 'Birthdays',
      url: '#',
      icon: IconDatabase,
    },
    {
      name: 'Holidays',
      url: '#',
      icon: IconReport,
    },
    {
      name: 'Celebrations',
      url: '#',
      icon: IconFileWord,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <Link href="#">
                <IconInnerShadowTop className="!size-5" />
                <span className="text-base font-semibold">EventInventor.</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavDocuments items={data.documents} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
