import React from "react";
import { View, Text, Pressable } from "react-native";
import twi, { tw } from "~/lib/tailwind";
import OkSmartText from "~/components/smart-text/OkSmartText";
import OkUserAvatar from "~/components/avatars/OkUserAvatar";
import OkReactToPostCommentButton from "~/components/OkPostTheatre/OkPostTheatreSidebar/components/OkPostComments/components/OkPostComment/components/OkPostCommentInlineActions/components/ReactToPostCommentButton";
import FontAwesomeIcon from "~/component-lib/FontAwesomeIcon";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";

export default function OkPostCommentInlineActions() {
  const { t } = useTranslation();
  return (
    <View style={tw`flex-row justify-between`}>
      <Pressable><Text style={tw`dark:text-white`}>{t("post__action_reply")}</Text></Pressable>
      <OkReactToPostCommentButton />
      <FontAwesomeIcon icon={faEllipsisH} />
    </View>
  );
}
