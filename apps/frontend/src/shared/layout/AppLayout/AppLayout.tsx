'use client';

import { useEffect, useState } from 'react';
import { Topbar } from '../Topbar/Topbar';
import { Sidebar } from '../Sidebar/Sidebar';
import { Drawer, DrawerContent, DrawerBody } from '@/shared/ui';
import { useLayoutStore } from '@/shared/store/useLayoutStore';

interface AppLayoutProps {
  children: React.ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
  const {
    isSidebarOpen,
    isDrawerOpen,
    toggleSidebar,
    toggleDrawer,
    setDrawerOpen,
  } = useLayoutStore();
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 1024px)');

    const handleChange = (e: MediaQueryListEvent | MediaQueryList) => {
      setIsDesktop(e.matches);
      if (e.matches) {
        setDrawerOpen(false);
      }
    };

    handleChange(mediaQuery);
    mediaQuery.addEventListener('change', handleChange);

    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [setDrawerOpen]);

  const handleMenuToggle = () => {
    if (isDesktop) {
      toggleSidebar();
    } else {
      toggleDrawer();
    }
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <div
        className={`hidden lg:block flex-shrink-0 transition-all duration-300 ease-in-out ${
          isSidebarOpen ? 'w-64 opacity-100' : 'w-0 opacity-0'
        }`}
      >
        <Sidebar isDesktop={true} />
      </div>

      <div className="flex flex-col flex-1 overflow-hidden">
        <Topbar onMenuToggle={handleMenuToggle} />

        <main className="flex-1 overflow-auto">{children}</main>
      </div>

      <Drawer
        isOpen={isDrawerOpen}
        onOpenChange={setDrawerOpen}
        placement="left"
        classNames={{
          base: 'lg:hidden',
          wrapper: 'top-16',
        }}
      >
        <DrawerContent>
          <DrawerBody className="p-0">
            <Sidebar isDesktop={false} />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
