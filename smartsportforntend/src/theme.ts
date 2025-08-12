'use client';
import { createTheme } from '@mui/material/styles';
// src/theme.ts
export const theme = createTheme({
    palette: {
        brand: {
            main: '#0E0F16',
            light: '#72E9C9',
            dark: '#F02424',
        },
        primary: {
            main: '#03071E',
            light: '#8D99AE',
            dark: '#010416',
        },
        secondary: {
            main: '#8D99AE',
        },
        error: {
            main: '#D32F2F',
            dark: '#F02424',
        },
        warning: {
            main: '#F57C00',
        },
        info: {
            main: '#1976D2',
        },
        success: {
            main: '#2E7D32',
        },
        background: {
            default: '#F8F9FA',
            paper: '#FFFFFF',
        },
        text: {
            primary: '#212121',
            secondary: '#757575',
            disabled: '#BDBDBD',
        },
    },
    typography: {
        xs: { fontSize: '1rem', lineHeight: '1.25rem' }, // 14px
        sm: { fontSize: '1.125rem', lineHeight: '1.5rem' }, // 16px
        lg: { fontSize: '1.25rem', lineHeight: '1.75rem' }, // 18px
        xl: { fontSize: '1.25rem', lineHeight: '1.75rem' }, // 20px
        '2xl': { fontSize: '1.875rem', lineHeight: '2rem' }, // 24px
        '3xl': { fontSize: '2.25rem', lineHeight: '2.25rem' }, // 30px
        '4xl': { fontSize: '3rem', lineHeight: '2.5rem' }, // 36px
        '5xl': { fontSize: '3.5rem', lineHeight: '1' },
    },
    customFontWeight: {
        thin: 100,
        extralight: 200,
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
        black: 900,
    },
});
