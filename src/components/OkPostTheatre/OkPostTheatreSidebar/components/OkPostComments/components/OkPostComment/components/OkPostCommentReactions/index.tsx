import React from "react";
import { View, Text } from "react-native";
import twi, { tw } from "~/lib/tailwind";
import OkEmojiReactionButton from "~/components/buttons/OkEmojiReactionButton";

export default function OkPostCommentReactions() {
  return (
    <View style={tw`flex-row items-center text-sm`}>
      {[
        { count: 30, emoji: "👍" },
        { count: 110, emoji: "😁" },
      ].map((item, idx) => (
        <OkEmojiReactionButton key={idx} item={item} />
      ))}
    </View>
  );
}
