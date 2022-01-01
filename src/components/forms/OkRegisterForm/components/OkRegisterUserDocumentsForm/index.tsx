import React from "react";
import { View, Text } from "react-native";
import twi, { tw } from "~/lib/tailwind";
import Twemoji from "~/component-lib/Twemoji";
import OkButtonsNavigation from "~/components/navigation/OkButtonsNavigation";

export default function OkRegisterUserDocumentsForm() {
  return (
    <>
      <Twemoji>🏡</Twemoji>
      <Twemoji>👩‍⚖️</Twemoji>
      <Twemoji>🔐️</Twemoji>
      <OkButtonsNavigation />
    </>
  );
}
