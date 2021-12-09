import React from "react";
import App from "next/app";
import { useRouter } from "next/router";
import "~/assets/styles/index.scss"
import tw, { useDeviceContext } from "~/lib/tailwind";
import "~/lib/i18n";

function MyApp({ Component, pageProps }) {
  useDeviceContext(tw);
  const router = useRouter();
  return (
  <>
  <Component {...pageProps} key={router.asPath} />
  <style jsx global> {`
   body {  font-family: 'Nunito Sans'}
   `}</style>
  </>
  );
}

export default MyApp;
