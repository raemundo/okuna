import React from 'react'
import { View } from 'react-native'
import { tw } from "~/lib/tailwind";

import Card from "native-headless-ui/src/components/Card"
import OkCommunityCover from "~/components/covers/OkCommunityCover";
import OkDesktopCommunityProfileHeaderBar from '~/screens/OkCommunityProfile/components/OkDesktopCommunityProfile/components/OkDesktopCommunityProfileHeader/components/OkDesktopCommunityProfileHeaderBar'
import OkCommunityAvatar from "~/components/avatars/OkCommunityAvatar";

export default function OkDesktopCommunityProfileHeader() {
    return (
        <Card style={tw`rounded-lg`}>
            <OkCommunityCover />
            <OkDesktopCommunityProfileHeaderBar />
        </Card>
    )
}
