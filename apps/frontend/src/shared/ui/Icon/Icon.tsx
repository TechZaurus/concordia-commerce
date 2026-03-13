'use client';

import { LucideProps } from 'lucide-react';
import { Suspense } from 'react';
import { iconRegistry, IconName } from './icon-registry';

export type { IconName };

export interface IconProps extends Omit<LucideProps, 'ref'> {
  name: IconName;
  fallback?: React.ReactNode;
}

export function Icon({ name, fallback = null, ...props }: IconProps) {
  const IconComponent = iconRegistry[name];

  if (!IconComponent) {
    console.warn(`Icon "${name}" not found in registry`);
    return <>{fallback}</>;
  }

  return (
    <Suspense fallback={fallback}>
      <IconComponent {...props} />
    </Suspense>
  );
}
