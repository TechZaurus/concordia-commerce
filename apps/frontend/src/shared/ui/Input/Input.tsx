'use client';

import {
  Input as HeroInput,
  InputProps as HeroInputProps,
} from '@heroui/react';
import type { Ref } from 'react';

export interface InputProps extends HeroInputProps {
  ref?: Ref<HTMLInputElement>;
}

export const Input = ({ ref, ...props }: InputProps) => {
  return <HeroInput ref={ref} {...props} />;
};

Input.displayName = 'Input';
