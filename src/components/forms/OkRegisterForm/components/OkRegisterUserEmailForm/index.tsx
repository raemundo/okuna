import React from "react";
import { View, Text, TextInput } from "react-native";
import twi, { tw } from "~/lib/tailwind";
import OkButtonsNavigation from "~/components/navigation/OkButtonsNavigation";
import { useTranslation } from "react-i18next";

export default function OkRegisterUserEmailForm() {
    const { t } = useTranslation();

  return (
    <>
      <Text style={tw`dark:text-white`}>{t("auth__create_acc__what_email")}</Text>
      <TextInput
        placeholder={t("auth__create_acc__email_placeholder")}
        style={tw`bg-gray-100 p-2 rounded-3xl text-lg`}
      />
      <Text style={tw`text-red-500`}>
        {t("auth__create_acc__email_empty_error")}
      </Text>
      <Text style={tw`text-red-500`}>
        {t("auth__create_acc__email_invalid_error")}
      </Text>
      <Text style={tw`text-red-500`}>
        {t("auth__create_acc__email_server_error")}
      </Text>
      <Text style={tw`text-red-500`}>
        {t("auth__create_acc__email_taken_error")}
      </Text>
      <OkButtonsNavigation />
    </>
  );
}
