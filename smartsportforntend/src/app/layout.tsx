import { ClientProviders } from './components/ClientProviders';
import { News_Cycle } from 'next/font/google';
import {metadata} from './metadata';
export { metadata };

const newsCycle = News_Cycle({
    variable: '--font-news-cycle',
    weight: ['400', '700'],
    subsets: ['latin'],
});

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={`${newsCycle.variable} font-newsCycle`}>
                <ClientProviders>{children}</ClientProviders>
            </body>
        </html>
    );
}
