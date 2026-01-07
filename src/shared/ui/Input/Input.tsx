'use client';

import { Input as HeroInput, InputProps as HeroInputProps } from "@heroui/react";
import { forwardRef } from "react";

export interface InputProps extends HeroInputProps {
  // Add custom props here if needed in the future
}

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return (
    <HeroInput ref={ref} {...props} />
  );
});

Input.displayName = "Input";
