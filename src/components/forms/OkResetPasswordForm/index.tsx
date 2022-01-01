import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import twi, { tw } from "~/lib/tailwind";
import OkButtonsNavigation from "~/components/navigation/OkButtonsNavigation";
import { useTranslation } from "react-i18next";

export default function OkResetPasswordForm() {
  const { t } = useTranslation();
  const [activeStep, setActiveStep] = useState(0);
  const goToPreviousStep = () => {
    setActiveStep(activeStep !== 0 ? activeStep - 1 : activeStep);
  };
  const goToNextStep = () => {
    setActiveStep(activeStep !== 1 ? activeStep + 1 : activeStep);
  };
  return (
    <>
      {activeStep === 0 && (
        <>
          <Text style={tw`dark:text-white text-center text-xl font-bold`}>
            {t("auth__change_password_title")}
          </Text>
          <Text style={tw`dark:text-white`}>
            {t("auth__change_password_new_pwd")}
          </Text>
          <Text style={tw`dark:text-white`}>
            {t("auth__change_password_new_pwd_hint")}
          </Text>
          <TextInput
            placeholder={t("auth__create_acc__name_placeholder")}
            style={tw`bg-gray-100 p-2 rounded-3xl text-l`}
          />
          <Text style={tw`text-red-500`}>
            {t("auth__change_password_new_pwd_error")}
          </Text>
          <Text style={tw``}>{t("auth__change_password_save_text")}</Text>
        </>
      )}
      {activeStep === 1 && (
        <>
          <Text style={tw``}>{t("auth__change_password_save_success")}</Text>
        </>
      )}
      <OkButtonsNavigation
        onPrevious={goToPreviousStep}
        onNext={goToNextStep}
      />
    </>
  );
}
