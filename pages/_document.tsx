import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="id">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Karla&family=Source+Code+Pro&display=swap"
          rel="stylesheet"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />

        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:image"
          content="https://www.infoteoh.com/logo_infoteoh.png"
        />
        <meta property="og:title" content="infoteoh" />
        <meta
          property="og:description"
          content="kumpulan info tryout snbt gratis"
        />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://www.infoteoh.com/" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
