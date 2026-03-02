import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import type { User } from '@/shared/api/user';

interface UserState {
  user: User | null;
  isLoading: boolean;
  error: string | null;
  setUser: (user: User | null) => void;
  setLoading: (isLoading: boolean) => void;
  setError: (error: string | null) => void;
}

export const useUserStore = create<UserState>()(
  devtools(
    set => ({
      user: null,
      isLoading: false,
      error: null,
      setUser: user => set({ user, error: null }),
      setLoading: isLoading => set({ isLoading }),
      setError: error => set({ error }),
    }),
    {
      name: 'user-store',
    }
  )
);
