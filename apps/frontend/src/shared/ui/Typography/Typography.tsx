import { ReactNode } from 'react';

type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
type TextVariant = 'body' | 'small' | 'caption';

interface HeadingProps {
  level: HeadingLevel;
  children: ReactNode;
  className?: string;
}

interface TextProps {
  variant?: TextVariant;
  children: ReactNode;
  className?: string;
}

const headingSizes = {
  h1: 'text-4xl md:text-5xl',
  h2: 'text-3xl md:text-4xl',
  h3: 'text-2xl md:text-3xl',
  h4: 'text-xl md:text-2xl',
  h5: 'text-lg md:text-xl',
  h6: 'text-base md:text-lg',
};

const textSizes = {
  body: 'text-base',
  small: 'text-sm',
  caption: 'text-xs',
};

export function Heading({ level, children, className = '' }: HeadingProps) {
  const Component = level;
  const sizeClass = headingSizes[level];

  return (
    <Component
      className={`font-heading font-semibold ${sizeClass} ${className}`}
    >
      {children}
    </Component>
  );
}

export function Text({
  variant = 'body',
  children,
  className = '',
}: TextProps) {
  const sizeClass = textSizes[variant];

  return <p className={`font-body ${sizeClass} ${className}`}>{children}</p>;
}
