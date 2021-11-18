import React from 'react'
import OKPost from "~/components/OKPost";
import { View } from "react-native";
import tw, { t } from "~/lib/tailwind";
export default function OkDesktopCommunityProfileTimeline() {
    return (
        <View style={t`w-full md:w-4/6 md:pl-2`}>
            <OKPost />
        </View>
    )
}
