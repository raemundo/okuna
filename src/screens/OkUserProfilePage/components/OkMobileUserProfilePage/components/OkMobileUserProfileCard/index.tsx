import React from 'react'
import { View, Text } from 'react-native'
import twi, { tw } from "~/lib/tailwind";
import Card from 'native-headless-ui/src/components/Card';

import OkUserAvatar from '~/components/avatars/OkUserAvatar';
import { OkAvatarSize } from '~/components/avatars/lib/OkAvatarSize';
import OkUserProfileName from '~/screens/OkUserProfilePage/components/shared/OkUserProfileName';
import OkUserProfileUsername from '~/screens/OkUserProfilePage/components/shared/OkUserProfileUsername';
import OkUserProfileBio from '~/screens/OkUserProfilePage/components/shared/OkUserProfileBio';
import OkUserProfileLocation from '~/screens/OkUserProfilePage/components/shared/OkUserProfileLocation';
import OkUserProfileUrl from '~/screens/OkUserProfilePage/components/shared/OkUserProfileUrl';
import OkUserProfileAge from '~/screens/OkUserProfilePage/components/shared/OkUserProfileAge';
import OkUserProfileActionButtons from '~/screens/OkUserProfilePage/components/shared/OkUserProfileActionButtons';
import OkMobileUserProfileFollowersCount from './components/OkMobileUserProfileFollowersCount';
import OkMobileUserProfilePostsCount from './components/OkMobileUserProfilePostsCount';
import OkMobileUserProfileFollowingCount from './components/OkMobileUserProfileFollowingCount';


export default function OkMobileUserProfileCard() {
    return (
        <Card>
            <OkUserAvatar />
            <OkUserProfileActionButtons />
            <OkUserProfileName />
            <OkUserProfileUsername />
            <OkUserProfileBio />
            <OkUserProfileLocation />
            <OkUserProfileUrl />
            <OkUserProfileAge />
            <View style={tw`flex-row flex-wrap`}>
                <OkMobileUserProfileFollowersCount />
                <OkMobileUserProfilePostsCount />
                <OkMobileUserProfileFollowingCount />
            </View>
        </Card>
    )
}
