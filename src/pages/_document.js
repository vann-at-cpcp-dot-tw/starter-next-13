import { Html, Head, Main, NextScript } from 'next/document'

export default function Document(){
  return (
    <Html>
      <Head>
        <link rel="icon" type="image/png" href="assets/img/fav-icon.png" />
        <title></title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}