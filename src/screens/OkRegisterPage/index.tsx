import React from "react";
import { View, Text, Pressable } from "react-native";
import twi, { tw } from "~/lib/tailwind";
import OkAuthPage from "~/layouts/OkAuthPage";
import OkRegisterTokenForm from "~/components/forms/OkInviteTokenForm";
import OkRegisterForm from "~/components/forms/OkRegisterForm";
import Card from "~/component-lib/Card";
import Twemoji from "~/component-lib/Twemoji";
import { useTranslation } from "react-i18next";

export default function OkRegisterPage() {
  const { t } = useTranslation();
  return (
    <OkAuthPage>
      <Card style={tw`rounded-lg p-3`}>
        <Twemoji>✨</Twemoji>
        <Text style={tw`dark:text-white text-2xl text-center`}>
          {t("auth__create_account")}
        </Text>
        {true ? <OkRegisterForm /> : <OkRegisterTokenForm />}
        <Pressable
          style={tw`mt-5 bg-green-500 p-3 rounded-3xl text-xl text-center text-white font-bold`}
        >
          <Text style={tw`text-white text-xl`}>{t("auth__login")}</Text>
        </Pressable>
      </Card>
    </OkAuthPage>
  );
}
