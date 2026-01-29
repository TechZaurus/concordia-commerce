'use client';

import * as React from 'react';
import { HeroUIProvider } from '@heroui/react';
import { RxDBProvider } from '@/shared/lib/RxDBProvider';
import '@/shared/config/i18n';

import { MSWProvider } from '@/app/msw-provider';

export interface ProvidersProps {
  children: React.ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <MSWProvider>
      <RxDBProvider>
        <HeroUIProvider>{children}</HeroUIProvider>
      </RxDBProvider>
    </MSWProvider>
  );
}
