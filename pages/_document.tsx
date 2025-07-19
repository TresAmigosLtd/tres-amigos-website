import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            href='https://fonts.googleapis.com/css2?family=Inter:wght@400..700&display=swap'
            rel='stylesheet'
          />
          <script
            async
            src="https://cloud.umami.is/script.js"
            data-website-id="0248a4b4-4fc1-409d-9024-3402f51a9a72"
          ></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
