import React, { Fragment } from 'react'
import Header from './header'
import { useSelector } from '@/store'
import { Inter, Montserrat } from 'next/font/google';
import Footer from './footer';

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap',
});

const montserrat = Montserrat({
    subsets: ['latin'],
    variable: '--font-montserrat',
    display: 'swap',
});

function MainLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const { themeMode } = useSelector((state) => state.theme)
    return (
        <html lang="en" className={`${inter.variable} ${montserrat.variable}`}>
            <body className={`${themeMode}`}>
                <Fragment>
                    <Header />
                    <div className='main-area'>
                        {children}
                    </div>
                    <Footer />
                </Fragment>
            </body>
        </html>
    )
}

export default MainLayout