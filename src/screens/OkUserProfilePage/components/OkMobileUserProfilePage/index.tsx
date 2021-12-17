import React from 'react'
import { View, Text } from 'react-native'
import twi, { tw } from "~/lib/tailwind";
import OkUserCover from "~/components/covers/OkUserCover";
import OkMobileUserProfileHeader from "./components/OkMobileUserProfileHeader";
import OkMobileUserProfileCard from "./components/OkMobileUserProfileCard";
import OkUserPostsStream from '~/components/posts-stream/OkUserPostsStream';

export default function OkMobileUserProfilePage() {
    return (
        <View>
            <OkUserCover />
            <OkMobileUserProfileHeader />
            <OkMobileUserProfileCard />
            <OkUserPostsStream />
        </View>
    )
}
