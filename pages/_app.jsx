import Head from "next/head";
import "/styles/globals.css";

export default function MyApp({ Component, pageProps }) {

  return (
    <>
      <Head>
        <title>Frontend Mentor | Bookmark landing page</title>
        <meta name="description" content="A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free. Our aim is to make it quick and easy for you to access your favourite websites." />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
