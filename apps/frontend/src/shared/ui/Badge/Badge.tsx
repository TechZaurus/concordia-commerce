'use client';

import {
  Badge as HeroBadge,
  BadgeProps as HeroBadgeProps,
} from '@heroui/react';
import type { Ref } from 'react';

export interface BadgeProps extends HeroBadgeProps {
  ref?: Ref<HTMLSpanElement>;
}

export const Badge = ({ ref, ...props }: BadgeProps) => {
  return <HeroBadge ref={ref} {...props} />;
};

Badge.displayName = 'Badge';
