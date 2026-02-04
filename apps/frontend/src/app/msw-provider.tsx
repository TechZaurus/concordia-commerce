'use client';

import { useEffect, useState } from 'react';

export function MSWProvider({ children }: { children: React.ReactNode }) {
  const [mswReady, setMswReady] = useState(false);

  useEffect(() => {
    async function enableMocking() {
      if (process.env.NODE_ENV !== 'development') {
        setMswReady(true);
        return;
      }

      if (typeof window !== 'undefined') {
        try {
          console.log('Starting MSW Worker...');
          const { worker } = await import('@/mocks/browser');
          await worker.start({
            onUnhandledRequest: 'bypass',
          });
          console.log('MSW Worker started successfully');
          setMswReady(true);
        } catch (error) {
          console.error('Failed to start MSW:', error);
          // Still set ready so app doesn't hang, but mocking won't work
          setMswReady(true);
        }
      }
    }

    enableMocking();
  }, []);

  if (!mswReady) {
    return null; // Or a loading spinner
  }

  return <>{children}</>;
}
