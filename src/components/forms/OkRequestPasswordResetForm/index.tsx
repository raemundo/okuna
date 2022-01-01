import React from "react";
import { useTranslation } from "react-i18next";
import { View, Text, TextInput } from "react-native";
import twi, { tw } from "~/lib/tailwind";
import Twemoji from "~/component-lib/Twemoji";
import OkButtonsNavigation from "~/components/navigation/OkButtonsNavigation";

export default function OkRequestPasswordResetForm() {
  const { t } = useTranslation();
  return (
    <>
      <Text style={tw`text-lg font-bold dark:text-gray-500`}>
        {t("auth__create_acc__what_email")}
      </Text>
      <TextInput
        style={tw`bg-gray-100 p-2 rounded-3xl text-lg`}
        placeholder={t("auth__create_acc__email_placeholder")}
      />
      <Text style={tw`text-red-500`}>
        {t("auth__create_acc__email_empty_error")}
      </Text>
      <Text style={tw`text-red-500`}>
        {t("auth__create_acc__email_invalid_error")}
      </Text>
      <Twemoji>📫</Twemoji>
      <OkButtonsNavigation />
      <Text>{t("auth__reset_password_success_info")}</Text>
    </>
  );
}
