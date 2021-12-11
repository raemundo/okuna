import React from 'react'
import { View, Text } from 'react-native'
import twi, { tw } from "~/lib/tailwind";
import OkMobileCommunityProfileHeader from "./components/OkMobileCommunityProfileHeader";
import OkMobileCommunityProfileCard from "./components/OkMobileCommunityProfileCard";
import OkCommunityPostsStream from '~/components/posts-stream/OkCommunityPostsStream';
import OkCommunityCover from '~/components/covers/OkCommunityCover';
import OkNewPostAction from '~/components/OkNewPostAction';

export default function OkMobileCommunityProfile() {
    return (
        <View>
            <OkMobileCommunityProfileHeader />
            <OkCommunityCover />
            <OkMobileCommunityProfileCard />
            <OkCommunityPostsStream />
            <OkNewPostAction />
        </View>
    )
}
