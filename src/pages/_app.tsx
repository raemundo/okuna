import React, { useState, useEffect } from "react";
import App from "next/app";
import { useRouter } from "next/router";
import "~/assets/styles/index.scss"
import tw, { useDeviceContextSever } from "~/lib/tailwind";
import { useAppColorScheme } from "twrnc";
import "~/lib/i18n";
import { TouchableOpacity, Text } from "react-native";

function MyApp({ Component, pageProps }) {
  useDeviceContextSever(tw)
  const [colorScheme, toggleColorScheme, setColorScheme] = useAppColorScheme(tw);
  tw.setColorScheme(colorScheme);
  const router = useRouter();
  return (
    <>
      <TouchableOpacity onPress={toggleColorScheme}>
        <Text style={tw`bg-red-500 text-black dark:text-white`}>Switch Color Scheme {colorScheme} </Text>
      </TouchableOpacity>
      <Component {...pageProps} key={router.asPath} />
      <style jsx global> {`
   body {  font-family: 'Nunito Sans'}
   `}</style>
    </>
  );
}

export default MyApp;
