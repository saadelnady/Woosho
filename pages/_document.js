import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }
  render() {
    const { locale } = this.props.__NEXT_DATA__;
    const dir = locale === "ar" ? "rtl" : "ltr";

    return (
      <Html lang={locale} dir={dir}>
        <Head>
          <meta charSet="utf-8" />
          <meta name="theme-color" content="#000" />
          <meta name="msapplication-navbutton-color" content="#000" />
          <meta name="apple-mobile-web-app-status-bar-style" content="#000" />
          <meta name="author" content="Mash World" />
          <meta name="keywords" content="" />
          <link rel="preload" href="/images/starsBg.webp" as="image" />
        </Head>

        <body dir={dir}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
