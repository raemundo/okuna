import React from 'react'
import { useTranslation } from 'react-i18next';
import { View, Text } from 'react-native'
import twi, { tw } from "~/lib/tailwind";

export default function OkMobileUserProfileFollowingCount() {
    const { t } = useTranslation()
    return (
        <Text style={tw`dark:text-white`}><Text>20K</Text>{t('post__profile_counts_following')}</Text>
    )
}
