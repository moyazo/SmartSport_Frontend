import '@mui/material/styles';

declare module '@mui/material/styles' {
    interface Palette {
        brand: Palette['primary'];
        surface: Palette['primary'];
    }
    interface PaletteOptions {
        brand?: PaletteOptions['primary'];
        surface?: PaletteOptions['primary'];
    }

    interface TypographyVariants {
        xs: React.CSSProperties;
        sm: React.CSSProperties;
        lg: React.CSSProperties;
        xl: React.CSSProperties;
        '2xl': React.CSSProperties;
        '3xl': React.CSSProperties;
        '4xl': React.CSSProperties;
        '5xl': React.CSSProperties;
    }

    // Permitir usar estas variantes en el prop variant de Typography
    interface TypographyVariantsOptions {
        xs?: React.CSSProperties;
        sm?: React.CSSProperties;
        lg?: React.CSSProperties;
        xl?: React.CSSProperties;
        '2xl'?: React.CSSProperties;
        '3xl'?: React.CSSProperties;
        '4xl'?: React.CSSProperties;
        '5xl'?: React.CSSProperties;
    }

    interface TypographyPropsVariantOverrides {
        xs: true;
        sm: true;
        lg: true;
        xl: true;
        '2xl': true;
        '3xl': true;
        '4xl': true;
        '5xl': true;
    }
}


declare module '@mui/material/styles' {
  interface Theme {
    customFontWeight: {
      thin: number;
      extralight: number;
      light: number;
      normal: number;
      medium: number;
      semibold: number;
      bold: number;
      extrabold: number;
      black: number;
    };
  }
  interface ThemeOptions {
    customFontWeight?: {
      thin?: number;
      extralight?: number;
      light?: number;
      normal?: number;
      medium?: number;
      semibold?: number;
      bold?: number;
      extrabold?: number;
      black?: number;
    };
  }
}

