import React from "react";
import { View } from "react-native";
import { tw } from "~/lib/tailwind";
import OkEmojiReactionButton from "~/components/buttons/OkEmojiReactionButton";

export default function OkPostReactions() {
  return (
    <View style={tw`flex-row items-center text-sm mx-2 my-2`}>
      {[
        { count: 15, emoji: "❤" },
        { count: 10, emoji: "👍" },
        { count: 11, emoji: "😁" },
      ].map((item, idx) => (
        <OkEmojiReactionButton key={idx} item={item} />
      ))}
    </View>
  );
}
