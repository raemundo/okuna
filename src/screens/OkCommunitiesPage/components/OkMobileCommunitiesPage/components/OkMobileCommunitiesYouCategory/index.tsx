import React from 'react'
import { View, Text } from 'react-native'
import twi, { tw } from "~/lib/tailwind";

import OkCategoryPreviewButton from "~/components/buttons/OkCategoryPreviewButton";
import OkFatButton from "~/components/buttons/OkFatButton";
import OkUserAvatar from "~/components/avatars/OkUserAvatar";
import OkHttpList from "~/components/OkHttpList";
import OkCommunityTile from "~/components/tiles/OkCommunityTile";
import { useTranslation } from 'react-i18next';

export default function OkMobileCommunitiesYouCategory() {
    const { t } = useTranslation()
    return (
        <View>
            <Text style={tw`text-2xl font-bold dark:text-white`}>{t('community__favorites_title')}</Text>
            <OkHttpList listType="community">
                <View style={tw`flex-row flex-wrap`}>{[1, 2, 3, 4].map((item, idx) => <OkCommunityTile key={idx} style={tw`m-2`} />)}</View>
            </OkHttpList>
            <Text style={tw`text-gray-500`}>{t('community__favorite_communities')}</Text>

            <Text style={tw`text-2xl font-bold dark:text-white`}>{t('community__administrated_title')}</Text>
            <OkHttpList listType="community">
                <View style={tw`flex-row flex-wrap`}>{[1, 2, 3, 4].map((item, idx) => <OkCommunityTile key={idx} style={tw`m-2`} />)}</View>
            </OkHttpList>
            <Text style={tw`text-gray-500`}>{t('community__administrated_communities')}</Text>

            <Text style={tw`text-2xl font-bold dark:text-white`}>{t('community__moderated_title')}</Text>
            <OkHttpList listType="community">
                <View style={tw`flex-row flex-wrap`}>{[1, 2, 3, 4].map((item, idx) => <OkCommunityTile key={idx} style={tw`m-2`} />)}</View>
            </OkHttpList>
            <Text style={tw`text-gray-500`}>{t('community__moderated_communities')}</Text>

            <Text style={tw`text-2xl font-bold dark:text-white`}>{t('community__joined_title')}</Text>
            <OkHttpList listType="community">
                <View style={tw`flex-row flex-wrap`}>{[1, 2, 3, 4].map((item, idx) => <OkCommunityTile key={idx} style={tw`m-2`} />)}</View>
            </OkHttpList>
            <Text style={tw`text-gray-500`}>{t('community__joined_communities')}</Text>
        </View>
    )
}
