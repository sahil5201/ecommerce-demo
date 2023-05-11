'use client';
import { MainLayout } from '@/layouts'
import '../styles/globals.scss'
import { Provider } from 'react-redux'
import store from '@/store'
import { Fragment } from 'react';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Fragment>
      <Provider store={store}>
        <MainLayout>
          {children}
        </MainLayout>
      </Provider>
    </Fragment>
  )
}
