'use client';
import AppImg from './components/AppImg/appimg';
import AppCard from './components/AppCard/appcard';
import LandingText from './components/LandingText/landingtext';
import Line from './components/Line/line';
import { alpha, Box, useTheme } from '@mui/material';

export default function Home() {
    const theme = useTheme();

    return (
        <Box
            component="main"
            id="HomeMainContainer"
            className="font-roboto-condensed text-3xl"
            sx={{
                backgroundColor: alpha(theme.palette.primary.main, 0.6),
                minHeight: '100vh',
                display: 'flex',
                flexDirection: { xs: 'column', md: 'column', lg: 'row' },
                alignItems: 'center',
                justifyContent: {
                    xs: 'center',
                    md: 'center',
                    lg: 'space-around',
                },
                p: { xs: 2, sm: 4 }, // padding responsive
            }}>
            {/* Imagen adaptable */}
            <AppImg
                src="/Sport.png"
                alt="App Image"
                className="rounded shadow-md"
                sx={{
                    width: { xs: 150, sm: 175, md: 300 }, // breakpoints MUI
                    height: { xs: 150, sm: 175, md: 300 },
                }}
            />

            {/* Card adaptable */}
            <AppCard
                display="flex"
                align="center"
                justify="center"
                flexFlow="column"
                sx={{
                    backgroundColor: alpha(theme.palette.primary.main, 0.78),
                    borderRadius: '2rem',
                    border: `2px solid ${theme.palette.primary.light}`,
                    mt: 4,
                    // Distribución responsive
                    width: {
                        xs: '90%', // ocupa casi todo en mobile
                        md: '80%', // más ancho en tablet si está en column
                        lg: '45%', // mitad del ancho en desktop si padre está en row
                    },
                    maxWidth: 1000,
                    height: {
                        xs: 190,
                        sm: 250,
                        md: 400,
                    },
                    p: { xs: 2, sm: 3 },
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
                childcomponents={[
                    /* Fila Welcome Back adaptable */
                    <Box
                        key="Welcome Back!"
                        sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            justifyContent: 'space-around',
                            alignItems: 'center',
                            gap: 1,
                        }}>
                        <LandingText
                            key="Welcome"
                            titleContent="Welcome"
                            href="/auth/signup"
                            sx={(theme) => ({
                                color: theme.palette.background.paper,
                                fontWeight: theme.customFontWeight.extralight,
                                fontSize: {
                                    xs: theme.typography['2xl'].fontSize,
                                    sm: theme.typography['3xl'].fontSize,
                                    md: theme.typography['4xl'].fontSize,
                                    lg: theme.typography['5xl'].fontSize
                                }
                            })}
                        />
                        <LandingText
                            key="Back!"
                            titleContent="Back!"
                            href="/auth/signup"
                            sx={(theme) => ({
                                color: theme.palette.brand.dark,
                                fontWeight: theme.customFontWeight.bold,
                                fontSize: {
                                    xs: theme.typography['2xl'].fontSize,
                                    sm: theme.typography['3xl'].fontSize,
                                    md: theme.typography['4xl'].fontSize,
                                    lg: theme.typography['5xl'].fontSize
                                },
                            })}
                        />
                    </Box>,

                    /* Línea separadora adaptable */
                    <Line
                        key="Separator"
                        sx={{
                            backgroundColor: theme.palette.brand.dark,
                            width: {
                                xs: '75%',
                                sm: '70%',
                            },
                            maxWidth: 300,
                            minWidth: 120,
                            height: '1px',
                            minHeight: '2px',
                            borderRadius: '5.5rem',
                            my: 2,
                        }}
                    />,

                    /* Fila SmartSport App adaptable */
                    <Box
                        key="SmartSportApp"
                        sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            justifyContent: 'space-around',
                            alignItems: 'center',
                            gap: 1,
                        }}>
                        <LandingText
                            key="SmartSport"
                            titleContent="SmartSport"
                            href="/auth/signup"
                            sx={(theme) => ({
                                color: theme.palette.brand.dark,
                                fontWeight: theme.customFontWeight.bold,
                                fontSize: {
                                    xs: theme.typography['2xl'].fontSize,
                                    sm: theme.typography['3xl'].fontSize,
                                    md: theme.typography['4xl'].fontSize,
                                    lg: theme.typography['5xl'].fontSize
                                },
                            })}
                        />
                        <LandingText
                            key="App"
                            titleContent="App"
                            href="/auth/signup"
                            sx={(theme) => ({
                                color: theme.palette.background.paper,
                                fontWeight: theme.customFontWeight.extralight,
                                fontSize: {
                                    xs: theme.typography['2xl'].fontSize,
                                    sm: theme.typography['3xl'].fontSize,
                                    md: theme.typography['4xl'].fontSize,
                                    lg: theme.typography['5xl'].fontSize
                                },
                            })}
                        />
                    </Box>,
                ]}
            />
        </Box>
    );
}
