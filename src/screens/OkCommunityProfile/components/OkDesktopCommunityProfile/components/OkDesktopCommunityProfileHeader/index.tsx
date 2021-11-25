import React from 'react'
import { View } from 'react-native'
import { tw } from "~/lib/tailwind";


import OkCommunityCover from "~/components/covers/OkCommunityCover";
import OkDesktopCommunityProfileHeaderBar from '~/screens/OkCommunityProfile/components/OkDesktopCommunityProfile/components/OkDesktopCommunityProfileHeader/components/OkDesktopCommunityProfileHeaderBar'
import OkCommunityAvatar from "~/components/avatars/OkCommunityAvatar";

export default function OkDesktopCommunityProfileHeader() {
    return (
        <View
            style={tw`w-full shadow border border-gray-300 bg-white rounded-lg`}
        >
            <OkCommunityCover />
            <OkDesktopCommunityProfileHeaderBar />
        </View>
    )
}
