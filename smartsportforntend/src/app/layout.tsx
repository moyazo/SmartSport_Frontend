import { ClientProviders } from './components/ClientProviders';
import { metadata } from './metadata';
import React from 'react';
export { metadata };
import { Roboto_Condensed } from 'next/font/google';

export const robotoCondensed = Roboto_Condensed({
    variable: '--font-roboto-condensed',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'], // rango completo
    subsets: ['latin'],
});

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="min-h-screen">
            <body
                className={`${robotoCondensed.variable} font-robotoCondensed min-h-screen`}>
                <ClientProviders>{children}</ClientProviders>
            </body>
        </html>
    );
}
