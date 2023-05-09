import React, { Fragment } from 'react'
import Banner from './banner'
import Header from './header'
import { useSelector } from '@/store'

function MainLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const { themeMode } = useSelector((state) => state.theme)
    return (
        <html lang="en">
            <body className={themeMode}>
                <Fragment>
                    <Banner />
                    <Header />
                    {children}
                </Fragment>
            </body>
        </html>
    )
}

export default MainLayout