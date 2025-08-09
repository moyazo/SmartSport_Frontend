import type { Metadata } from 'next';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { News_Cycle } from 'next/font/google';
import '@/types/mui';
import { theme } from '../theme';
import './globals.css';
import { ThemeProvider } from '@emotion/react';
import GlobalStyles from '@mui/material/GlobalStyles';
import CssBaseline from '@mui/material/CssBaseline';

export const newsCycle = News_Cycle({
    variable: '--font-news-cycle',
    weight: ['400', '700'],
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: 'Smart Sport',
    description: 'Fitness and Sports Management Platform',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${newsCycle.variable} font-newsCycle`}>
                <AppRouterCacheProvider options={{ enableCssLayer: true }}>
                    <GlobalStyles styles="@layer theme,base,mui,components,utilities;" />
                    <ThemeProvider theme={theme}>
                        <CssBaseline />
                        {children}
                    </ThemeProvider>
                </AppRouterCacheProvider>
            </body>
        </html>
    );
}
