import React from 'react'
import { View, Text } from 'react-native'
import twi, { tw } from "~/lib/tailwind";
import OkUserPostsStream from "~/components/posts-stream/OkUserPostsStream";

export default function OkDesktopUserProfileTimeline() {
    return (
        <View style={tw`w-full md:w-4/6 md:pl-2`}>
            <OkUserPostsStream />
        </View>
    )
}
