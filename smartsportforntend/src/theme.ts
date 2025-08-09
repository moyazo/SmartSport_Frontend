'use client';
import { createTheme } from '@mui/material/styles';
import './theme.d.ts';
// src/theme.ts
export const theme = createTheme({
    palette: {
        brand: {
            main: '#0E0F16',
            light: '#72E9C9',
            dark: '#F02424',
        },
        primary: {
            main: '#2B2D42',
            light: '#72E9C9',
            dark: '#0E0F16',
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
        xs: {
        fontSize: '0.75rem',
        lineHeight: '1rem',
        },
        sm: {
        fontSize: '0.875rem',
        lineHeight: '1.25rem',
        },
        lg: {
        fontSize: '1.125rem',
        lineHeight: '1.75rem',
        },
        xl: {
        fontSize: '1.25rem',
        lineHeight: '1.75rem',
        },
        '2xl': {
        fontSize: '1.5rem',
        lineHeight: '2rem',
        },
        '3xl': {
        fontSize: '1.875rem',
        lineHeight: '2.25rem',
        },
        '4xl': {
        fontSize: '2.25rem',
        lineHeight: '2.5rem',
        },
        '5xl': {
        fontSize: '3rem',
        lineHeight: '1',
        },
        
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
    }
});
