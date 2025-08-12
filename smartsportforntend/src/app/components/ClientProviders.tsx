'use client';
import React from 'react';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { ThemeProvider } from '@emotion/react';
import GlobalStyles from '@mui/material/GlobalStyles';
import CssBaseline from '@mui/material/CssBaseline';
import { theme } from '../../theme';
import { Box } from '@mui/material';

export function ClientProviders({ children }: { children: React.ReactNode }) {
    return (
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
            <GlobalStyles styles="@layer theme,base,mui,components,utilities;" />
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Box
                    component={'main'}
                    sx={{
                        backgroundImage: `url('/GymWallpaper.jpg')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        height: '100vh',
                        width: '100%',
                        margin: 0,
                        padding: 0,
                        textDecoration: 'none',
                    }}>
                    {children}
                </Box>
            </ThemeProvider>
        </AppRouterCacheProvider>
    );
}
export default ClientProviders;
