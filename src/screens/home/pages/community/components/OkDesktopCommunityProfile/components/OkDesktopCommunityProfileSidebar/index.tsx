import React from 'react'
import { View, Text } from 'react-native'
import tw, { t } from "~/lib/tailwind";

import OkCommunityProfileInfoButtons from '~/screens/home/pages/community/components/shared/OkCommunityProfileInfoButtons';
import OkCommunityProfileCategories from '~/screens/home/pages/community/components/shared/OkCommunityProfileCategories';
import OkCommunityProfileVisibility from '~/screens/home/pages/community/components/shared/OkCommunityProfileVisibility';

export default function OkDesktopCommunityProfileSidebar() {
    return (
        <View style={t`w-full md:w-2/6 mt-1`}>
            <View
                style={t`bg-white rounded-lg p-3 shadow border border-gray-300`}
            >
                <View style={t`mb-2 `}>
                    <Text style={t`font-bold text-sm text-gray-400`}>About</Text>
                </View>
                <View style={t`flex p-2`}>
                    <Text>
                        A place for coffee enthusiast. Third wave and specialty coffee, brewing methods, roasting, cool, places, equipments, culture.
                    </Text>
                </View>

                <View style={t`flex-row border-t border-gray-400 mt-5`}>
                </View>
                <OkCommunityProfileVisibility />
                <OkCommunityProfileCategories />
                <OkCommunityProfileInfoButtons />
            </View>
        </View>

    )
}
