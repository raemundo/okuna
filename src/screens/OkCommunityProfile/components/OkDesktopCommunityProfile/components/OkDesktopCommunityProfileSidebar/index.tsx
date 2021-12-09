import React from 'react'
import { View, Text } from 'react-native'
import twi, { tw } from "~/lib/tailwind";

import Card from "~/component-lib/Card"
import Divider from "~/component-lib/Divider"
import OkCommunityProfileVisibility from "~/screens/OkCommunityProfile/components/shared/OkCommunityProfileVisibility"
import OkCommunityProfileCategories from '~/screens/OkCommunityProfile/components/shared/OkCommunityProfileCategories';
import OkCommunityProfileInfoButtons from '~/screens/OkCommunityProfile/components/shared/OkCommunityProfileInfoButtons';
import OkCommunityAvatar from '~/components/avatars/OkCommunityAvatar';
import OkJoinCommunityButton from '~/components/buttons/OkJoinCommunityButton';
import OkCommunityProfileActionButtons from '~/screens/OkCommunityProfile/components/shared/OkCommunityProfileActionButtons';
import OkMobileCommunityProfileTitle from '~/screens/OkCommunityProfile/components/OkMobileCommunityProfile/components/OkMobileCommunityProfileCard/components/OkMobileCommunityProfileTitle'
import OkMobileCommunityProfileName from '~/screens/OkCommunityProfile/components/OkMobileCommunityProfile/components/OkMobileCommunityProfileCard/components/OkMobileCommunityProfileName';
import OkSmartText from '~/components/smart-text/OkSmartText'; 
import { useTranslation } from 'react-i18next';

export default function OkDesktopCommunityProfileSidebar() {
    const { t } = useTranslation()
    return (
        <View style={tw`w-full mt-1 md:w-2/6`}>
            <Card
            >
                <View style={tw`mb-2 `}>
                    <Text style={tw`text-sm font-bold text-gray-400`}>{t('community__about')}</Text>
                </View>
                <View style={tw`flex p-2`}>
                    <OkSmartText
                        text="A place for coffee enthusiast. Third wave and specialty coffee, brewing methods, roasting, cool, places, equipments, culture."
                    />
                </View>
                <Divider />
                <OkCommunityProfileVisibility />
                <OkCommunityProfileCategories />
                <Divider />
                <OkCommunityProfileInfoButtons />
            </Card>
        </View>

    )
}
