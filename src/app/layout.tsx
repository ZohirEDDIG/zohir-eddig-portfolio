import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import GalaxyBackground from '@/components/design/GalaxyBackground';

import './globals.css';

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang='en'>

            <body>

                <Header />

                {children}

                <Footer />

                <GalaxyBackground />

            </body>
            
        </html>
    );
}