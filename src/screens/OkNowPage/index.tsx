import React from 'react'
import { View, Text, Pressable } from 'react-native'
import { useTranslation } from 'react-i18next';
import twi, { tw } from "~/lib/tailwind";
import OkHomePage from "~/layouts/OkHomePage";

import OkTrendingPostsStream from "~/components/posts-stream/OkTrendingPostsStream";
import OkTopPostsStream from "~/components/posts-stream/OkTopPostsStream";
import OkMobileHeader from "~/components/mobile-only/OkMobileHeader";
import OkSearch from "~/components/search/OkSearch";
import OkPostsStream from "~/components/posts-stream/OkPostsStream";

export default function OkNowPage() {
    const { t } = useTranslation()
    return (
        <OkHomePage>
            <OkSearch />
            <View style={tw`flex-row`}>
                <Pressable style={(state) => [tw`flex-1 p-3 text-center border-b-2 border-gray-300`, state.hovered && tw`border-yellow-300`]}><Text style={tw`font-bold text-black dark:text-white`}>{t('post__top_posts_title')}</Text></Pressable>
                <Pressable style={(state) => [tw`flex-1 p-3 text-center border-b-2 border-gray-300`, state.hovered && tw`border-yellow-300`]}><Text style={tw`font-bold text-black dark:text-white`}>{t('post__trending_posts_title')}</Text></Pressable>
            </View>
            <View style={tw`w-full mx-auto mt-5 lg:w-6/12`}>
                <OkTrendingPostsStream />
                <OkTopPostsStream />
            </View>
        </OkHomePage>
    )
}
