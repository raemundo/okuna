import React, { useState, useEffect } from "react";
import App from "next/app";
import { useRouter } from "next/router";
import "~/assets/styles/index.scss"
import tw from "~/lib/tailwind";
import "~/lib/i18n";
import { useDeviceContext, useAppColorScheme } from 'twrnc';
import { TouchableOpacity, Text } from "react-native";

function MyApp({ Component, pageProps }) {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  useDeviceContext(isClient ? tw : tw, { withDeviceColorScheme: false });
  const [colorScheme, toggleColorScheme, setColorScheme] = useAppColorScheme(isClient ? tw : tw);

  const router = useRouter();
  return (
    <>
      <TouchableOpacity onPress={toggleColorScheme}>
        <Text style={tw`text-black dark:text-white`}>Switch Color Scheme {colorScheme} </Text>
      </TouchableOpacity>
      <Component {...pageProps} key={router.asPath} />
      <style jsx global> {`
   body {  font-family: 'Nunito Sans'}
   `}</style>
    </>
  );
}

export default MyApp;
