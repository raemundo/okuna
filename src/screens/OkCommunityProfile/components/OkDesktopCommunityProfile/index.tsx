import React from "react";
import { View, Text } from "react-native";
import { tw } from "~/lib/tailwind";
import OkDesktopCommunityProfileHeader from "./components/OkDesktopCommunityProfileHeader"
import OkDesktopCommunityProfileSidebar from "./components/OkDesktopCommunityProfileSidebar"
import OkDesktopCommunityProfileTimeline from "./components/OkDesktopCommunityProfileTimeline"
export default function OkCommunityProfile() {
  return (
    <View style={tw`w-9/12 h-full mx-auto mt-6`}>
      <OkDesktopCommunityProfileHeader />
      <View style={tw`flex-row flex-wrap h-full mt-2`}>
        <OkDesktopCommunityProfileSidebar />
        <OkDesktopCommunityProfileTimeline />
      </View>
    </View>
  );
};
