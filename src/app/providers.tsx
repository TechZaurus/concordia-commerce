'use client';

import * as React from 'react';
import { HeroUIProvider } from '@heroui/react';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '@/shared/lib/query-client';
import '@/shared/config/i18n';

import { MSWProvider } from '@/app/msw-provider';

export interface ProvidersProps {
  children: React.ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <MSWProvider>
      <QueryClientProvider client={queryClient}>
        <HeroUIProvider>
          {children}
        </HeroUIProvider>
      </QueryClientProvider>
    </MSWProvider>
  );
}
