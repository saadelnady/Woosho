import React, { useEffect, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { IntlProvider } from "react-intl";
import { Toaster } from "react-hot-toast";
import TopBarProgress from "react-topbar-progress-indicator";
import SSRProvider from "react-bootstrap/SSRProvider";
import Header from "@/components/Header";
// Main app Styles
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.rtl.min.css";
import "aos/dist/aos.css";
import "swiper/css";
import styles from "@/styles/main.scss";
const languages = {
  ar: require("@/content/languages/ar.json"),
  en: require("@/content/languages/en.json"),
};

import { wrapper } from "../src/store";
import { END } from "redux-saga";
import { useSelector } from "react-redux";
import Aos from "aos";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const { locale, defaultLocale } = useRouter();
  const { settings } = useSelector((state) => state.settings);

  const dir = locale === "ar" ? "rtl" : "ltr";
  const messages = languages[locale];

  const [Progress, setProgress] = useState(false);
  const [loading, setLoading] = useState(false);

  TopBarProgress.config({
    barThickness: 3,
    barColors: {
      0: "#d9e3e2",
      0.5: "#000",
      1.0: "#000",
    },
  });
  useEffect(() => {
    Aos.init({
      once: true,
      duration: 500,
      disable: "mobile",
    });
    Aos.refresh();
  }, []);
  useEffect(() => {
    const handleStart = (url) => {
      url !== router.pathname ? setLoading(true) : setLoading(false);
    };
    const handleComplete = () => setLoading(false);

    router.events.on("routeChangeStart", () => {
      setProgress(true);
      handleStart();
    });
    router.events.on("routeChangeComplete", () => {
      setProgress(false);
      handleComplete();
    });
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router]);

  useEffect(() => {
    document.documentElement.dir = dir;
    document.body.style.direction = dir;
    document.body.setAttribute("dir", dir);
  }, [dir]);

  return (
    <>
      <Head>
        <title>{settings?.appName?.[locale]} </title>
        <link rel="shortcut icon" href={settings?.favIcon} />
        <meta name="description" content={settings?.appDesc?.[locale]} />
      </Head>
      {Progress && <TopBarProgress />}
      <SSRProvider>
        <IntlProvider
          messages={messages}
          defaultLocale={defaultLocale}
          locale={locale}
        >
          <div className={styles.wrap}>
            <Header />
            <Toaster
              position="top-left"
              reverseOrder={false}
              toastOptions={{
                style: {
                  fontSize: "16px",
                  padding: "16px",
                },
              }}
            />

            <Component {...pageProps} />
          </div>
        </IntlProvider>
      </SSRProvider>
    </>
  );
}

MyApp.getInitialProps = wrapper.getInitialAppProps((store) => async () => {
  store.dispatch(END);
  await store.sagaTask.toPromise();
  return {};
});

export default wrapper.withRedux(MyApp);
