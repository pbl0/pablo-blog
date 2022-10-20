import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
        <script 
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1122307556063328"
          crossOrigin="anonymous">
        </script>
        </Head>
        <body className="">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
