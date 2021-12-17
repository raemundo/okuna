import React from 'react'
import { useTranslation } from 'react-i18next';
import { View, Text } from 'react-native'
import twi, { tw } from "~/lib/tailwind";

export default function OkMobileUserProfilePostsCount() {
    const { t } = useTranslation()
    return (
        <Text style={tw`dark:text-white`}><Text>1.2K</Text>{t('post__profile_counts_posts')}</Text>
    )
}
