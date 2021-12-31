import React from "react";
import { View, Image } from "react-native";
import twi, { tw } from "~/lib/tailwind";

export default function OkPostTheatreMediaImage() {
  return (
    <View style={tw`w-1/2 h-76`}>
      <Image
        source={{ uri: "https://picsum.photos/1080/1920" }}
        style={tw`w-full h-76`}
      />
    </View>
  );
}
