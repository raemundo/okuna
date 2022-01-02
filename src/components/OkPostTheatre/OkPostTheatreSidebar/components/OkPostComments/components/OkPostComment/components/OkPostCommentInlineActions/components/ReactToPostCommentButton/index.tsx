import React from "react";
import { useTranslation } from "react-i18next";
import { View, Text, Pressable } from "react-native";
import twi, { tw } from "~/lib/tailwind";
import OkEmojiReactionButton from "~/components/buttons/OkEmojiReactionButton";
import OkReactionEmojiPicker from "~/components/pickers/OkReactionEmojiPicker";

export default function ReactToPostCommentButton() {
  const { t } = useTranslation();
  return (
    <>
      <Pressable>
        <Text style={tw`dark:text-white`}>{t("post__action_react")}</Text>
      </Pressable>
      <OkReactionEmojiPicker />
    </>
  );
}
