import React from "react";
import { View, Text } from "react-native";
import twi, { tw } from "~/lib/tailwind";
import OkHomePage from "~/layouts/OkHomePage";
import OkPostsStream from "~/components/posts-stream/OkPostsStream";
import OkTimelinePostUploads from "./components/OkTimelinePostUploads";
import OkNewPostAction from "~/components/OkNewPostAction";

export default function OkTimelinePage() {
  return (
    <OkHomePage>
      <OkPostsStream leading={<OkTimelinePostUploads />} />
      <OkNewPostAction />
    </OkHomePage>
  );
}
