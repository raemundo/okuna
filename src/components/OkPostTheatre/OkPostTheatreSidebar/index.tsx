import React from "react";
import { View, Text } from "react-native";
import twi, { tw } from "~/lib/tailwind";

import OkPostHeader from "~/components/OkPost/components/OkPostHeader";
import OkPostText from "~/components/OkPost/components/OkPostText";
import OkPostActions from "~/components/OkPost/components/OkPostActions";
import OkPostLinkPreview from "~/components/OkPost/components/OkPostLinkPreview";
import OkPostReactions from "~/components/OkPost/components/OkPostReactions";
import OkPostComments from "~/components/OkPostTheatre/OkPostTheatreSidebar/components/OkPostComments";
import OkPostCommenter from "~/components/OkPostTheatre/OkPostTheatreSidebar/components/OkPostCommenter";
import OkPostMedia from "~/components/OkPost/components/OkPostMedia";
export default function OkPostTheatreSidebar() {
  return (
    <View style={tw`w-1/2`}>
      <OkPostHeader />
      <OkPostText />
      <OkPostLinkPreview />
      <OkPostMedia />
      <OkPostActions />
      <OkPostReactions />
      <OkPostComments />
      <OkPostCommenter />
    </View>
  );
}
