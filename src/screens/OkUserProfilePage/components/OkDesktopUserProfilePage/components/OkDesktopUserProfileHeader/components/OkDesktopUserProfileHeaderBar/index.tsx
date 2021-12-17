import React from 'react'
import { View, Text } from 'react-native'
import twi, { tw } from "~/lib/tailwind";

import OkUserCover from "~/components/covers/OkUserCover";
import OkUserAvatar from "~/components/avatars/OkUserAvatar";
import { OkAvatarSize } from "~/components/avatars/lib/OkAvatarSize";
import OkDesktopUserProfileHeaderBarStats from "./components/OkDesktopUserProfileHeaderBarStats"
import OkDesktopUserProfileHeaderBarIds from "./components/OkDesktopUserProfileHeaderBarIds";
import OkUserProfileActionButtons from "~/screens/OkUserProfilePage/components/shared/OkUserProfileActionButtons";


export default function OkDesktopUserProfileHeaderBar() {
    return (
        <View style={tw`flex-row flex-wrap justify-between items-center w-auto my-3`}>
            <View style={tw`flex-row items-center justify-start w-9/12 px-2`}>
                    <OkUserAvatar />
                    <OkDesktopUserProfileHeaderBarIds />
                    <OkDesktopUserProfileHeaderBarStats />
            </View>
            <OkUserProfileActionButtons />
        </View>
    )
}