import React from "react";
import { View, Text, Pressable } from "react-native";
import twi, { tw } from "~/lib/tailwind";
import OkAuthPage from "~/layouts/OkAuthPage";
import OkRegisterTokenForm from "~/components/forms/OkInviteTokenForm";
import OkRegisterForm from "~/components/forms/OkRegisterForm";
import { Card } from "native-headless-ui";
import Twemoji from "~/component-lib/Twemoji";
import { useTranslation } from "react-i18next";

export default function OkRegisterPage() {
  const { t } = useTranslation();
  return (
    <OkAuthPage>
      <Card style={tw`p-3 rounded-lg`}>
        <Twemoji>✨</Twemoji>
        <Text style={tw`text-2xl text-center dark:text-white`}>
          {t("auth__create_account")}
        </Text>
        {true ? <OkRegisterForm /> : <OkRegisterTokenForm />}
        <Pressable
          style={tw`p-3 mt-5 text-xl font-bold text-center text-white bg-green-500 rounded-3xl`}
        >
          <Text style={tw`text-xl text-white`}>{t("auth__login")}</Text>
        </Pressable>
      </Card>
    </OkAuthPage>
  );
}
