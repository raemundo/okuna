import { Card } from 'native-headless-ui';
import React from 'react'
import { View, Text } from 'react-native'
import twi, { tw } from "~/lib/tailwind";
import OkDesktopUserProfileHeaderBar from "./components/OkDesktopUserProfileHeaderBar"
import OkUserCover from "~/components/covers/OkUserCover";

// from '~/pages/home/pages/user/components/desktop-user-profile/components/desktop-user-profile-header/components/desktop-user-profile-header-bar/OkDesktopUserProfileHeaderBar.vue';

export default function OkDesktopUserProfileHeader() {
    return (
        <Card style={tw`rounded-lg`}>
            <OkUserCover />
            <OkDesktopUserProfileHeaderBar/>
        </Card>
    )
}
