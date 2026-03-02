import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface LayoutState {
  isSidebarOpen: boolean;
  isDrawerOpen: boolean;
  toggleSidebar: () => void;
  toggleDrawer: () => void;
  setDrawerOpen: (open: boolean) => void;
}

export const useLayoutStore = create<LayoutState>()(
  persist(
    set => ({
      isSidebarOpen: true,
      isDrawerOpen: false,
      toggleSidebar: () =>
        set(state => ({ isSidebarOpen: !state.isSidebarOpen })),
      toggleDrawer: () => set(state => ({ isDrawerOpen: !state.isDrawerOpen })),
      setDrawerOpen: (open: boolean) => set({ isDrawerOpen: open }),
    }),
    {
      name: 'layout-storage',
    }
  )
);
