import React from 'react'
import { View } from "react-native";
import twi, { tw } from "~/lib/tailwind";
import OkCommunityPostsStream from "~/components/posts-stream/OkCommunityPostsStream";

export default function OkDesktopCommunityProfileTimeline() {
    return (
        <View style={tw`w-full md:w-4/6 md:pl-2`}>
            <OkCommunityPostsStream />
        </View>
    )
}
