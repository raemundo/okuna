import { View, Text, TextInput } from "react-native";
import twi, { tw } from "~/lib/tailwind";
import OkButtonsNavigation from "~/components/navigation/OkButtonsNavigation";
import { useTranslation } from "react-i18next";

export default function OkRegisterUserPasswordForm() {
  const { t } = useTranslation();

  return (
    <>
      <Text style={tw`dark:text-white`}>
        {t("auth__create_acc__what_password")}
      </Text>
      <Text style={tw`dark:text-white`}>
        {t("auth__create_acc__what_password_subtext")}
      </Text>
      <TextInput
        style={tw`bg-gray-100 p-2 rounded-3xl text-lg`}
      />
      <Text style={tw`text-red-500`}>
        {t("auth__create_acc__password_empty_error")}
      </Text>
      <Text style={tw`text-red-500`}>
        {t("auth__create_acc__password_length_error")}
      </Text>
      <OkButtonsNavigation />
    </>
  );
}
