import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { View, Text, TextInput } from "react-native";
import twi, { tw } from "~/lib/tailwind";
import Twemoji from "~/component-lib/Twemoji";
import OkButtonsNavigation from "~/components/navigation/OkButtonsNavigation";

export default function OkRequestPasswordResetForm() {
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
        </>
      )}
      {activeStep === 1 && (
        <Text>{t("auth__reset_password_success_info")}</Text>
      )}
      <OkButtonsNavigation
        onPrevious={goToPreviousStep}
        onNext={goToNextStep}
      />
    </>
  );
}
