import React from 'react'
import { View, Text } from 'react-native'
import twi, { tw } from "~/lib/tailwind";

import OkCommunityProfileVisibility from  "~/screens/OkCommunityProfile/components/shared/OkCommunityProfileVisibility"
import OkCommunityProfileCategories from '~/screens/OkCommunityProfile/components/shared/OkCommunityProfileCategories';
import OkCommunityProfileInfoButtons from '~/screens/OkCommunityProfile/components/shared/OkCommunityProfileInfoButtons';
import OkCommunityAvatar from '~/components/avatars/OkCommunityAvatar';
import OkJoinCommunityButton from '~/components/buttons/OkJoinCommunityButton';
import OkCommunityProfileActionButtons from '~/screens/OkCommunityProfile/components/shared/OkCommunityProfileActionButtons';
import OkMobileCommunityProfileTitle from '~/screens/OkCommunityProfile/components/OkMobileCommunityProfile/components/OkMobileCommunityProfileCard/components/OkMobileCommunityProfileTitle'
import OkMobileCommunityProfileName from '~/screens/OkCommunityProfile/components/OkMobileCommunityProfile/components/OkMobileCommunityProfileCard/components/OkMobileCommunityProfileName';

export default function OkDesktopCommunityProfileSidebar() {
    return (
        <View style={tw`w-full md:w-2/6 mt-1`}>
            <View
                style={tw`bg-white rounded-lg p-3 shadow border border-gray-300`}
            >
                <View style={tw`mb-2 `}>
                    <Text style={tw`font-bold text-sm text-gray-400`}>About</Text>
                </View>
                <View style={tw`flex p-2`}>
                    <Text>
                        A place for coffee enthusiast. Third wave and specialty coffee, brewing methods, roasting, cool, places, equipments, culture.
                    </Text>
                </View>

                <View style={tw`flex-row border-t border-gray-400 mt-5`}>
                </View>
                <OkCommunityProfileVisibility />
                <OkCommunityProfileCategories />
                <OkCommunityProfileInfoButtons />
            </View>
        </View>

    )
}
