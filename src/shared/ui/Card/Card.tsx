'use client';

import { 
  Card as HeroCard, 
  CardHeader as HeroCardHeader, 
  CardBody as HeroCardBody, 
  CardFooter as HeroCardFooter
} from "@heroui/react";
import { forwardRef, ComponentProps } from "react";

export const Card = forwardRef<HTMLDivElement, ComponentProps<typeof HeroCard>>((props, ref) => {
  return (
    <HeroCard ref={ref} {...props}>
      {props.children}
    </HeroCard>
  );
});
Card.displayName = "Card";

export const CardHeader = forwardRef<HTMLDivElement, ComponentProps<typeof HeroCardHeader>>((props, ref) => {
  return (
    <HeroCardHeader ref={ref} {...props}>
      {props.children}
    </HeroCardHeader>
  );
});
CardHeader.displayName = "CardHeader";

export const CardBody = forwardRef<HTMLDivElement, ComponentProps<typeof HeroCardBody>>((props, ref) => {
  return (
    <HeroCardBody ref={ref} {...props}>
      {props.children}
    </HeroCardBody>
  );
});
CardBody.displayName = "CardBody";

export const CardFooter = forwardRef<HTMLDivElement, ComponentProps<typeof HeroCardFooter>>((props, ref) => {
  return (
    <HeroCardFooter ref={ref} {...props}>
      {props.children}
    </HeroCardFooter>
  );
});
CardFooter.displayName = "CardFooter";
