import "../styles/globals.css";
import { Provider } from "react-redux";
import store from "../store";
import { SessionProvider } from "next-auth/react";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { Toaster } from "react-hot-toast";
import Head from "next/head";

// Global polyfill for Promise.withResolvers if not available
if (typeof Promise !== 'undefined' && !Promise.withResolvers) {
  Promise.withResolvers = function() {
    let resolve, reject;
    const promise = new Promise((res, rej) => {
      resolve = res;
      reject = rej;
    });
    return { promise, resolve, reject };
  };
}

let persistor = persistStore(store);

function MyApp({ Component, pageProps: { session, meta, ...pageProps } }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        {meta && (
          <>
            <title>{meta.title}</title>
            <meta name="description" content={meta.description} />
            <meta name="keywords" content={meta.keywords} />
            <meta name="robots" content={meta.robots} />
            <meta name="author" content={meta.author} />
            <link rel="canonical" href={meta.canonical} />
            <meta property="og:title" content={meta.og.title} />
            <meta property="og:description" content={meta.og.description} />
            <meta property="og:type" content={meta.og.type} />
            <meta property="og:image" content={meta.og.image} />
            <meta property="og:image:width" content={meta.og.imageWidth} />
            <meta property="og:image:height" content={meta.og.imageHeight} />
            <meta property="og:url" content={meta.og.url} />
            <meta name="twitter:card" content={meta.twitter.card} />
            <meta name="twitter:title" content={meta.twitter.title} />
            <meta name="twitter:description" content={meta.twitter.description} />
            <meta name="twitter:image" content={meta.twitter.image} />
          </>
        )}
      </Head>
      <SessionProvider session={session}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <div className="font-plus-jakarta">
              <Toaster />
              <Component {...pageProps} />
            </div>
          </PersistGate>
        </Provider>
      </SessionProvider>
    </>
  );
}

export default MyApp;