import React from "react";
import { View, Text } from "react-native";
import { t } from "~/lib/tailwind";
import OkDesktopCommunityProfileHeader from "./components/OkDesktopCommunityProfileHeader"
import OkDesktopCommunityProfileSidebar from "./components/OkDesktopCommunityProfileSidebar"
import OkDesktopCommunityProfileTimeline from "./components/OkDesktopCommunityProfileTimeline"
const OkCommunityProfile = () => {
  return (

    <View style={t`w-9/12 mx-auto mt-6 h-full`}>
      <OkDesktopCommunityProfileHeader />
      {/* After bio content */}
      <View style={t`h-full mt-2`}>
        <View style={t`flex-row flex-wrap`}>
          <OkDesktopCommunityProfileSidebar />
          <OkDesktopCommunityProfileTimeline />
        </View>
      </View>
    </View>
  );
};

export default OkCommunityProfile;
