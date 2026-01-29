'use client';

import {
  Button as HeroButton,
  ButtonProps as HeroButtonProps,
} from '@heroui/react';
import type { Ref } from 'react';

export interface ButtonProps extends HeroButtonProps {
  ref?: Ref<HTMLButtonElement>;
}

export const Button = ({ ref, ...props }: ButtonProps) => {
  return (
    <HeroButton ref={ref} {...props}>
      {props.children}
    </HeroButton>
  );
};

Button.displayName = 'Button';
