import "../styles/globals.css";
import { Provider } from "react-redux";
import store from "../store";
import { SessionProvider } from "next-auth/react";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { Toaster } from "react-hot-toast";
import Head from "next/head";
import { Plus_Jakarta_Sans } from 'next/font/google';

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

const jakarta = Plus_Jakarta_Sans({
  weight: ['400', '500', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
});

let persistor = persistStore(store);

function MyApp({ Component, pageProps: { session, meta, ...pageProps } }) {
  return (
    <>
      {meta && (
        <Head>
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
        </Head>
      )}
      <SessionProvider session={session}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <div className={jakarta.className}>
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