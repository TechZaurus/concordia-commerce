export type ColorShade =
  | 50
  | 100
  | 200
  | 300
  | 400
  | 500
  | 600
  | 700
  | 800
  | 900
  | 950;

export type ColorScale =
  | 'brand'
  | 'secondary'
  | 'accent'
  | 'neutral'
  | 'info'
  | 'gray';

export type SemanticColor =
  | 'primary'
  | 'secondary'
  | 'accent'
  | 'info'
  | 'success'
  | 'warning'
  | 'danger';

export type ThemeColor =
  | `${ColorScale}-${ColorShade}`
  | ColorScale
  | SemanticColor
  | 'background'
  | 'foreground'
  | 'border'
  | 'muted';

declare module 'tailwindcss/tailwind-config' {
  interface TailwindTheme {
    colors: {
      brand: Record<ColorShade | 'DEFAULT', string>;
      secondary: Record<ColorShade | 'DEFAULT', string>;
      accent: Record<ColorShade | 'DEFAULT', string>;
      neutral: Record<ColorShade | 'DEFAULT', string>;
      info: Record<ColorShade | 'DEFAULT', string>;
      gray: Record<ColorShade | 'DEFAULT', string>;
      primary: { DEFAULT: string; foreground: string };
      success: { DEFAULT: string; foreground: string };
      warning: { DEFAULT: string; foreground: string };
      danger: { DEFAULT: string; foreground: string };
      background: string;
      foreground: string;
      border: string;
      muted: { DEFAULT: string; foreground: string };
    };
  }
}
