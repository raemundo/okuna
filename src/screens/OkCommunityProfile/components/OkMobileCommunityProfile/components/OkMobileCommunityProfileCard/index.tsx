import React from 'react'
import { View, Text } from 'react-native'
import Card from '~/component-lib/Card';
import twi, { tw } from "~/lib/tailwind";
import { OkAvatarSize } from '~/components/avatars/lib/OkAvatarSize';
import OkCommunityAvatar from '~/components/avatars/OkCommunityAvatar';
import OkCommunityProfileDescription from '~/screens/OkCommunityProfile/components/shared/OkCommunityProfileDescription';
import OkCommunityProfileVisibility from '~/screens/OkCommunityProfile/components/shared/OkCommunityProfileVisibility';
import OkCommunityProfileActionButtons from '~/screens/OkCommunityProfile/components/shared/OkCommunityProfileActionButtons';
import OkCommunityProfileCategories from '~/screens/OkCommunityProfile/components/shared/OkCommunityProfileCategories';
import OkCommunityProfileInfoButtons from '~/screens/OkCommunityProfile/components/shared/OkCommunityProfileInfoButtons';
import OkMobileCommunityProfilePostsCount from './components/OkMobileCommunityProfilePostsCount';
import OkMobileCommunityProfileMembersCount from './components/OkMobileCommunityProfileMembersCount';
import OkMobileCommunityProfileTitle from './components/OkMobileCommunityProfileTitle';
import OkMobileCommunityProfileName from './components/OkMobileCommunityProfileName';

export default function OkMobileCommunityProfileCard() {
    return (
        <Card>
            <View style={tw`m-2 flex-row justify-between`}>
                <OkCommunityAvatar />
                <OkCommunityProfileActionButtons />
            </View>
            <OkMobileCommunityProfileTitle />
            <OkMobileCommunityProfileName />
            <OkCommunityProfileDescription />
            <OkCommunityProfileVisibility />
            <OkMobileCommunityProfileMembersCount />
            <OkMobileCommunityProfilePostsCount />
            <OkCommunityProfileCategories />
            <OkCommunityProfileInfoButtons />
        </Card>
    )
}
