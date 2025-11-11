
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#171D22" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <link rel="apple-touch-icon" href="/icons/apple-icon-152x152.png" />
        <meta name="msapplication-TileImage" content="/icons/ms-icon-310x310.png" />
        <meta name="msapplication-TileColor" content="#171D22" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}