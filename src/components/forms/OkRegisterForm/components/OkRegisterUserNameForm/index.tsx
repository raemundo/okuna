import React from "react";
import { useTranslation } from "react-i18next";
import { View, Text, TextInput } from "react-native";
import twi, { tw } from "~/lib/tailwind";
import OkButtonsNavigation from "~/components/navigation/OkButtonsNavigation";

export default function OkRegisterUserNameForm() {
  const { t } = useTranslation();
  return (
    <>
      <Text style={tw`dark:text-white`}>{t("auth__create_acc__what_name")}</Text>
      <TextInput
        placeholder={t("auth__create_acc__name_placeholder")}
        style={tw`bg-gray-100 p-2 rounded-3xl text-l`}
      />
      <Text style={tw`text-red-500`}>
        {t("auth__create_acc__name_characters_error")}
      </Text>
      <Text style={tw`text-red-500`}>
        {t("auth__create_acc__name_empty_error")}
      </Text>
      <Text style={tw`text-red-500`}>
        {t("auth__create_acc__name_length_error")}
      </Text>
      <OkButtonsNavigation />
    </>
  );
}
