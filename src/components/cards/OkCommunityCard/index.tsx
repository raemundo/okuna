import React from 'react'
import { View, Text } from 'react-native'
import twi, { tw } from "~/lib/tailwind";
import OkCommunityCover from '~/components/covers/OkCommunityCover';
import OkCommunityProfileVisibility from "~/screens/OkCommunityProfile/components/shared/OkCommunityProfileVisibility"
import OkCommunityAvatar from '~/components/avatars/OkCommunityAvatar';
import OkJoinCommunityButton from '~/components/buttons/OkJoinCommunityButton';
import OkCommunityProfileActionButtons from '~/screens/OkCommunityProfile/components/shared/OkCommunityProfileActionButtons';
import OkMobileCommunityProfileTitle from "~/screens/OkCommunityProfile/components/OkMobileCommunityProfile/components/OkMobileCommunityProfileCard/components/OkMobileCommunityProfileTitle"
import OkMobileCommunityProfileName from "~/screens/OkCommunityProfile/components/OkMobileCommunityProfile/components/OkMobileCommunityProfileCard/components/OkMobileCommunityProfileName"
import OkCommunityProfileInfoButtons from '~/screens/OkCommunityProfile/components/shared/OkCommunityProfileInfoButtons';
import OkMobileCommunityProfileMembersCount from '~/screens/OkCommunityProfile/components/OkMobileCommunityProfile/components/OkMobileCommunityProfileCard/components/OkMobileCommunityProfileMembersCount';
import OkMobileCommunityProfilePostsCount from '~/screens/OkCommunityProfile/components/OkMobileCommunityProfile/components/OkMobileCommunityProfileCard/components/OkMobileCommunityProfilePostsCount';
import Card from '~/component-lib/Card';
import Divider from '@/src/component-lib/Divider';

export default function OkCommunityCard({ style }) {
    return (
        <Card style={[tw`rounded-lg h-64 w-60`, style]}>
            <OkCommunityCover style={tw`h-40`} />
            <View style={tw`flex-row items-center m-2`}>
                <OkCommunityAvatar style={tw`w-10 h-10 rounded-lg`} />
                <View>
                    <OkMobileCommunityProfileTitle />
                    <OkMobileCommunityProfileName />
                </View>
            </View>
            {/* 
            <OkJoinCommunityButton />
            <OkCommunityProfileVisibility />
            <OkCommunityProfileActionButtons />
            <OkCommunityProfileInfoButtons />
            <OkMobileCommunityProfilePostsCount />
            */}
            <Divider style={tw``} />
            <OkMobileCommunityProfileMembersCount />
        </Card>
    )
}
