'use client';

import { Button as HeroButton, ButtonProps as HeroButtonProps } from "@heroui/react";
import { forwardRef } from "react";

export interface ButtonProps extends HeroButtonProps {
  // Add custom props here if needed in the future
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  return (
    <HeroButton ref={ref} {...props}>
      {props.children}
    </HeroButton>
  );
});

Button.displayName = "Button";
