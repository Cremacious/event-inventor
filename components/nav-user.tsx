import { SidebarMenu, SidebarMenuItem } from '@/components/ui/sidebar';

import Link from 'next/link';
import { Settings } from 'lucide-react';

// import { auth, signOut } from '@/auth';

// import { Button } from './ui/button';

export async function NavUser() {
  // const session = await auth();

  // const user = session?.user;

  // const handleSignOut = async () => {
  //   await signOut();
  // };

  return (
    <SidebarMenu
      className="backgroundCyan
 rounded-xl p-2"
    >
      <SidebarMenuItem>
        <div className=" flex flex-row">
          {/* <Button variant="ghost" className="w-full" onClick={handleSignOut}>
            Sign Out
          </Button> */}
          <div className="ml-2 grid flex-1 text-left text-sm text-slate-800">
            <span className="truncate font-medium">name</span>
            <span className="text-slate-800 truncate text-xs">email</span>
          </div>
          <Link
            href="/dashboard/settings"
            className=" cursor-pointer hover:scale-105 transition-transform bg-slate-800 justify-center rounded-full p-2 "
          >
            {' '}
            <Settings className="textCyan" />
          </Link>
        </div>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
