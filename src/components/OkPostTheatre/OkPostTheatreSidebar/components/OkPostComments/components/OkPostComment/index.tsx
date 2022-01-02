import React from "react";
import { View, Text } from "react-native";
import twi, { tw } from "~/lib/tailwind";
import OkUserAvatar from "~/components/avatars/OkUserAvatar";
import OkPostCommentReactions from "~/components/OkPostTheatre/OkPostTheatreSidebar/components/OkPostComments/components/OkPostComment/components/OkPostCommentReactions";
import OkPostCommentInlineActions from "~/components/OkPostTheatre/OkPostTheatreSidebar/components/OkPostComments/components/OkPostComment/components/OkPostCommentInlineActions";
import OkPostCommentReplies from "~/components/OkPostTheatre/OkPostTheatreSidebar/components/OkPostComments/components/OkPostComment/components/OkPostCommentReplies";
import OkTranslatableSmartText from "~/components/smart-text/OkTranslatableSmartText";
export default function OkPostComment() {
  return (
    <>
      <View style={tw`flex-row`}>
        <OkUserAvatar />
        <View>
          <View style={tw`flex-row`}>
            <Text style={tw`dark:text-white`}>Raemundo</Text>
            <Text style={tw`dark:text-white`}>@rae</Text>
            <Text style={tw`text-gray-300`}>5 mins ago</Text>
          </View>
          <OkTranslatableSmartText />
          <OkPostCommentReactions />
        </View>
      </View>
      <OkPostCommentInlineActions />
      <OkPostCommentReplies />
    </>
  );
}
