import React from "react";
import { View, Text } from "react-native";
import { tw } from "~/lib/tailwind";
import OkDesktopCommunityProfileHeader from "./components/OkDesktopCommunityProfileHeader"
import OkDesktopCommunityProfileSidebar from "./components/OkDesktopCommunityProfileSidebar"
import OkDesktopCommunityProfileTimeline from "./components/OkDesktopCommunityProfileTimeline"
const OkCommunityProfile = () => {
  return (

    <View style={tw`w-9/12 mx-auto mt-6 h-full`}>
      <OkDesktopCommunityProfileHeader />
      {/* After bio content */}
      <View style={tw`h-full mt-2`}>
        <View style={tw`flex-row flex-wrap`}>
          <OkDesktopCommunityProfileSidebar />
          <OkDesktopCommunityProfileTimeline />
        </View>
      </View>
    </View>
  );
};

export default OkCommunityProfile;
