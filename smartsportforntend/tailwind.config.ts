import type { Config } from 'tailwindcss';
import * as appTheme from './src/theme';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import aspectRatio from '@tailwindcss/aspect-ratio';
import tailwindScrollbar from 'tailwind-scrollbar';
import tailwindcssAnimate from 'tailwindcss-animate';

const config: Config = {
    content: ['./src/app/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                brand: {
                    main: '#0E0F16',
                    light: '#72E9C9',
                    dark: '#F02424',
                },
                accent: '#D90404',
                neutral: '#EDF2F4',
                secondary: '#8D99AE',
                primary: '#2B2D42',
                success: '#2E7D32',
                warning: '#F57C00',
                error: '#D32F2F',
                info: '#1976D2',
                background: '#F8F9FA',
                surface: '#FFFFFF',
                text: {
                    primary: '#212121',
                    secondary: '#757575',
                    disabled: '#BDBDBD',
                    hint: '#9E9E9E',
                },
            },
            fontSize: {
                xs: ['0.75rem', { lineHeight: '1rem' }],
                sm: ['0.875rem', { lineHeight: '1.25rem' }],
                base: ['1rem', { lineHeight: '1.5rem' }],
                lg: ['1.125rem', { lineHeight: '1.75rem' }],
                xl: ['1.25rem', { lineHeight: '1.75rem' }],
                '2xl': ['1.5rem', { lineHeight: '2rem' }],
                '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
                '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
                '5xl': ['3rem', { lineHeight: '1' }],
            },
            fontWeight: {
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
            container: {
                center: true,
                padding: {
                    DEFAULT: '1rem',
                    sm: '2rem',
                    lg: '4rem',
                    xl: '5rem',
                    '2xl': '6rem',
                },
            },
            lineHeight: {
                normal: '1.5',
                none: '1',
                tight: '1.25',
                snug: '1.375',
                relaxed: '1.625',
                loose: '2',
            },
            letterSpacing: {
                tighter: '-0.05em',
                tight: '-0.025em',
                normal: '0',
                wide: '0.025em',
                wider: '0.05em',
                widest: '0.1em',
            },
            screens: {
                '3xl': '1920px',
                '4xl': '2560px',
                '2xl': '1440px',
                xl: '1280px',
                lg: '1024px',
                md: '768px',
                sm: '640px',
                xs: '480px',
            },
            spacing: {
                '128': '32rem',
                '144': '36rem',
                '160': '40rem',
                '192': '48rem',
            },
            borderRadius: {
                '4xl': '2rem',
                '5xl': '2.5rem',
            },
            boxShadow: {
                custom: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
            },
            fontFamily: {
                newsCycle: ['var(--font-roboto-condensed)', 'sans-serif'],
            },
        },
    },
    plugins: [
        forms,
        typography,
        aspectRatio,
        tailwindScrollbar({ nocompatible: true }),
        tailwindcssAnimate,
    ],
};

export default config;
