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
        <View style={tw`flex-row flex-wrap justify-between items-center w-auto my-3`}>
            <View style={tw`flex-row items-center justify-start w-9/12 px-2`}>
                    <OkCommunityAvatar />
                    <OkDesktopCommunityProfileHeaderBarIds />
                    <OkDesktopCommunityProfileHeaderBarStats />
            </View>
            <OkCommunityProfileActionButtons />
        </View>
    )
}
