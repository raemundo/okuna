import { faComment } from '@fortawesome/free-solid-svg-icons';
import FontAwesomeIcon from "~/component-lib/FontAwesomeIcon";
import React from 'react'
import { useTranslation } from 'react-i18next';
import { Text, Pressable } from 'react-native'
import twi, { tw } from "~/lib/tailwind";

export default function OkCommentPostButton() {
    const { t } = useTranslation()
    return (
        <Pressable style={tw`flex-row items-center justify-center w-5/12 p-2 bg-gray-200 dark:bg-gray-900 rounded-full`}>
            <FontAwesomeIcon icon={faComment} style={twi`dark:text-white`} />
            <Text style={tw`mx-1 text-sm font-semibold dark:text-white`}>{t('post__action_comment')}</Text>
        </Pressable>
    )
}
