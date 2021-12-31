import React from "react";
import { View, Text } from "react-native";
import twi, { tw } from "~/lib/tailwind";

import OkUserAvatar from "~/components/avatars/OkUserAvatar";
import OkCommentPostForm from "~/components/forms/OkCommentPostForm";
import OkPostComment from "~/components/OkPostTheatre/OkPostTheatreSidebar/components/OkPostComments/components/OkPostComment";

export default function OkPostCommenter() {
  return (
    <View style={tw`flex-row bg-gray-50 dark:bg-black`}>
      <OkUserAvatar />
      <OkCommentPostForm />
      {/* <OkPostComment /> */}
    </View>
  );
}
