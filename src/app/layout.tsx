import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google';

import MainNav from '@/components/organisms/mainNav';

import styles from './page.module.scss';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Harbor - Take home assignment',
  description: 'Harbor - Take home assignment',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={styles.html}>
      <body className={`${inter.className} ${styles.layout}`}>
        <MainNav/>
        {children}
      </body>
    </html>
  )
}
