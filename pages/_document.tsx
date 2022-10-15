import Document, { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <Script
            id="Adsense-id"
            async
            strategy="afterInteractive"
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1122307556063328"
            crossOrigin="anonymous"
           />
        </Head>
        <body className="">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
