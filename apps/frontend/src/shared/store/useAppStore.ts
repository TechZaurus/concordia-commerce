import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

interface AppState {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  // Add ephemeral UI state here
}

export const useAppStore = create<AppState>()(
  devtools(
    persist(
      set => ({
        theme: 'light',
        toggleTheme: () =>
          set(state => ({ theme: state.theme === 'light' ? 'dark' : 'light' })),
      }),
      {
        name: 'app-storage',
      }
    )
  )
);
