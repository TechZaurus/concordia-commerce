'use client';

import {
  Card as HeroCard,
  CardHeader as HeroCardHeader,
  CardBody as HeroCardBody,
  CardFooter as HeroCardFooter,
} from '@heroui/react';
import { type ComponentProps, type Ref } from 'react';

export const Card = ({
  ref,
  ...props
}: ComponentProps<typeof HeroCard> & { ref?: Ref<HTMLDivElement> }) => {
  return (
    <HeroCard ref={ref} {...props}>
      {props.children}
    </HeroCard>
  );
};
Card.displayName = 'Card';

export const CardHeader = ({
  ref,
  ...props
}: ComponentProps<typeof HeroCardHeader> & { ref?: Ref<HTMLDivElement> }) => {
  return (
    <HeroCardHeader ref={ref} {...props}>
      {props.children}
    </HeroCardHeader>
  );
};
CardHeader.displayName = 'CardHeader';

export const CardBody = ({
  ref,
  ...props
}: ComponentProps<typeof HeroCardBody> & { ref?: Ref<HTMLDivElement> }) => {
  return (
    <HeroCardBody ref={ref} {...props}>
      {props.children}
    </HeroCardBody>
  );
};
CardBody.displayName = 'CardBody';

export const CardFooter = ({
  ref,
  ...props
}: ComponentProps<typeof HeroCardFooter> & { ref?: Ref<HTMLDivElement> }) => {
  return (
    <HeroCardFooter ref={ref} {...props}>
      {props.children}
    </HeroCardFooter>
  );
};
CardFooter.displayName = 'CardFooter';
