import React from "react";
import App from "next/app";
import { useRouter } from "next/router";
import "~/assets/styles/index.scss"
import tw, { useDeviceContext } from "~/lib/tailwind";

function MyApp({ Component, pageProps }) {
  useDeviceContext(tw);
  const router = useRouter();
  return <Component {...pageProps} key={router.asPath} />;
}

export default MyApp;
