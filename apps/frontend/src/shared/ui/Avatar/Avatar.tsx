'use client';

import {
  Avatar as HeroAvatar,
  AvatarProps as HeroAvatarProps,
} from '@heroui/react';
import type { Ref } from 'react';

export interface AvatarProps extends HeroAvatarProps {
  ref?: Ref<HTMLSpanElement>;
}

export const Avatar = ({ ref, ...props }: AvatarProps) => {
  return <HeroAvatar ref={ref} {...props} />;
};

Avatar.displayName = 'Avatar';
