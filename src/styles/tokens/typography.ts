const fallbackFont = 'sans-serif';

export const typography = {
  family: {
    primary: `Poppins, ${fallbackFont}`,
  },
  sizes: {
    '2xs': '.625rem',
    xs: '.75rem',
    sm: '.875rem',
    base: '1rem',
    md: '1.125rem',
    lg: '1.5rem',
    xl: '2rem',
    '2xl': '2.5rem',
    '3xl': '3.5rem',
    '4xl': '4rem',
  },
  lineHeight: {
    sm: '1rem',
    base: '1.5rem',
    md: '2rem',
  },
  weight: {
    thin: 100,
    xlight: 200,
    light: 300,
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
    xBold: 800,
    black: 900,
  },
} as const;
