'use client';
import { useSidebar } from '@/components/ui/sidebar';
import { BookUser, CalendarFold, LayoutDashboard, Plus } from 'lucide-react';
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';

import Link from 'next/link';

export function NavMain() {
  const { toggleSidebar } = useSidebar();
  return (
    <SidebarGroup>
      <SidebarGroupContent className="flex flex-col gap-2">
        <SidebarMenu>
          <SidebarMenuItem className="flex items-center gap-2">
            <SidebarMenuButton
              onClick={toggleSidebar}
              tooltip="Quick Create"
              className="bg-cyan-500 text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground active:bg-primary/90 active:text-primary-foreground min-w-8 duration-200 ease-linear"
            >
              <Plus />
              <span>Quick Create</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
        <SidebarMenu>
          <SidebarMenuItem>
            <Link href="/dashboard">
              <SidebarMenuButton onClick={toggleSidebar} tooltip="">
                <LayoutDashboard className="text-sidebar-foreground/70" />
                <span>Dashboard</span>
              </SidebarMenuButton>
            </Link>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <Link href="/dashboard/events">
              <SidebarMenuButton onClick={toggleSidebar} tooltip="">
                <CalendarFold className="text-sidebar-foreground/70" />
                <span>My Events</span>
              </SidebarMenuButton>
            </Link>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <Link href="/dashboard/friends">
              <SidebarMenuButton onClick={toggleSidebar} tooltip="">
                <BookUser className="text-sidebar-foreground/70 " />
                <span>Friends</span>
              </SidebarMenuButton>
            </Link>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
