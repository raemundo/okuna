import { t } from "i18next";
import React from "react";
import { View, Text, TextInput, Pressable } from "react-native";
import twi, { tw } from "~/lib/tailwind";

export default function OkInviteTokenForm() {
  return (
    <View>
      <TextInput
        style={tw`bg-gray-100 p-2 rounded-3xl text-lg dark:text-white`}
        placeholder="e.g. eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MjIwMTF9.GKY4j11It9IYdTF1yg90XT6r9dFvMxBd-xWs1zu-xjE"
      />
      <Text style={tw`text-red-500`}>
        {t("auth__create_acc__invalid_token")}
      </Text>
      <Text style={tw`text-red-500`}>
        {t("auth__create_acc__request_invite")}
      </Text>
      <Pressable>
        <Text style={tw`dark:text-white`}>
          {t("auth__create_acc__validating_token")}
        </Text>
      </Pressable>
    </View>
  );
}
