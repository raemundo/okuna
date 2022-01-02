import React from 'react'
import { useTranslation } from 'react-i18next';
import { View, Text } from 'react-native'
import twi, { tw } from "~/lib/tailwind";

export default function OkPostCommentsSortSwitcher() {
    const {t} = useTranslation()
    return (
        <View>
            <Text>{t('post__comments_header_newer')}</Text>
            <Text>{t('post__comments_header_older')}</Text>
        </View>
    )
}
