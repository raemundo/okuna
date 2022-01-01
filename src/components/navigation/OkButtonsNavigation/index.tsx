import React from "react";
import { useTranslation } from "react-i18next";
import { View, Text, Pressable } from "react-native";
import twi, { tw } from "~/lib/tailwind";

export default function OkButtonsNavigation({ onPrevious, onNext }) {
  const { t } = useTranslation();
  return (
    <View style={tw`flex-row justify-between`}>
      <Pressable style={tw`rounded-lg bg-blue-500 p-2`} onPress={onPrevious}>
        <Text style={tw`text-white text-xl`}>
          {t("auth__create_acc__previous")}
        </Text>
      </Pressable>

      <Pressable style={tw`rounded-lg bg-blue-500 p-2`} onPress={onNext}>
        <Text style={tw`text-white text-xl`}>
          {t("auth__create_acc__next")}
        </Text>
      </Pressable>
    </View>
  );
}
