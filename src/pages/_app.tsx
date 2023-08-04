import '@/styles/_globals.scss'
import { Work_Sans } from 'next/font/google'
import type { AppProps } from 'next/app'

const workSans = Work_Sans({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${workSans.className} page-container`}>
      <Component {...pageProps} />
    </main>
  )
}
