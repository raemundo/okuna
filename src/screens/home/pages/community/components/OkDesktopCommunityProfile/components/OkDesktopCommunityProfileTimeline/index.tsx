import React from 'react'
import OKPost from "~/components/OKPost";
import { View } from "react-native";
import twi, { tw } from "~/lib/tailwind";
export default function OkDesktopCommunityProfileTimeline() {
    return (
        <View style={tw`w-full md:w-4/6 md:pl-2`}>
            <OKPost />
        </View>
    )
}
