import { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import '../styles/index.scss'
import Eyes from '../components/eyes'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Eyes></Eyes>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}