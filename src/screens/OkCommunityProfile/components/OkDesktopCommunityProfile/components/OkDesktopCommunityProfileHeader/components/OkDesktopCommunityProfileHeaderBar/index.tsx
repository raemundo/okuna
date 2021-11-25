import React from 'react'
import { View } from 'react-native'
import { tw } from "~/lib/tailwind";

import OkCommunityCover from "~/components/covers/OkCommunityCover";
import OkCommunityAvatar from "~/components/avatars/OkCommunityAvatar";
import { OkAvatarSize } from "~/components/avatars/lib/OkAvatarSize";
import OkDesktopCommunityProfileHeaderBarStats from "~/screens/OkCommunityProfile/components/OkDesktopCommunityProfile/components/OkDesktopCommunityProfileHeader/components/OkDesktopCommunityProfileHeaderBar/components/OkDesktopCommunityProfileHeaderBarStats"
import OkDesktopCommunityProfileHeaderBarIds from "~/screens/OkCommunityProfile/components/OkDesktopCommunityProfile/components/OkDesktopCommunityProfileHeader/components/OkDesktopCommunityProfileHeaderBar/components/OkDesktopCommunityProfileHeaderBarIds";
import OkCommunityProfileActionButtons from "~/screens/OkCommunityProfile/components/shared/OkCommunityProfileActionButtons";

export default function OkDesktopCommunityProfileHeaderBar() {
    return (
        <View style={tw`w-auto flex-row flex-wrap items-center`}>
            <View style={tw` flex-row justify-start mb-2 w-9/12`}>
                <View style={tw`flex-row items-center mx-2`}>
                    <OkCommunityAvatar />
                    <OkDesktopCommunityProfileHeaderBarIds />
                   
                </View>
                <OkDesktopCommunityProfileHeaderBarStats />
            </View>
            <OkCommunityProfileActionButtons />
        </View>
    )
}
