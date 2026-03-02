'use client';

import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverProps,
} from '@heroui/react';
import type { Ref } from 'react';

export interface MenuPopupProps extends Omit<PopoverProps, 'children'> {
  trigger: React.ReactNode;
  children: React.ReactNode;
  ref?: Ref<HTMLDivElement>;
}

export const MenuPopup = ({
  trigger,
  children,
  ref,
  ...props
}: MenuPopupProps) => {
  return (
    <Popover ref={ref} {...props}>
      <PopoverTrigger>{trigger}</PopoverTrigger>
      <PopoverContent className="p-0">{children}</PopoverContent>
    </Popover>
  );
};

MenuPopup.displayName = 'MenuPopup';
