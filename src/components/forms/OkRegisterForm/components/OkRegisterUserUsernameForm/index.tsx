import { View, Text, TextInput } from "react-native";
import twi, { tw } from "~/lib/tailwind";
import OkButtonsNavigation from "~/components/navigation/OkButtonsNavigation";
import { useTranslation } from "react-i18next";

export default function OkRegisterUserUsernameForm() {
  const { t } = useTranslation();
  
  return (
    <>
      <Text style={tw`dark:text-white`}>{t("auth__create_acc__what_username")}</Text>
      <TextInput
        placeholder={t("auth__create_acc__username_placeholder")}
        style={tw`bg-gray-100 p-2 rounded-3xl text-lg`}
      />
      <Text style={tw`text-red-500`}>
        {t("auth__create_acc__username_characters_error")}
      </Text>
      <Text style={tw`text-red-500`}>
        {t("auth__create_acc__username_empty_error")}
      </Text>
      <Text style={tw`text-red-500`}>
        {t("auth__create_acc__username_length_error")}
      </Text>
      <Text style={tw`text-red-500`}>
        {t("auth__create_acc__username_server_error")}
      </Text>
      <Text style={tw`text-red-500`}>
        {t("auth__create_acc__username_taken_error")}
      </Text>
      <OkButtonsNavigation />
    </>
  );
}
