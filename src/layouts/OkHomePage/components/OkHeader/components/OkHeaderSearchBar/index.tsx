import React from 'react'
import { TextInput, Pressable } from 'react-native'
import FontAwesomeIcon from '~/component-lib/FontAwesomeIcon';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import twi, { tw } from '~/lib/tailwind'
import { useTranslation } from 'react-i18next';

export default function OkHeaderSearchBar() {
    const { t } = useTranslation();
    return (
        <>
            <TextInput style={tw`flex-1 hidden px-4 py-2 text-center bg-gray-100 border border-transparent dark:bg-gray-500 md:flex rounded-2xl`} placeholder={t('user_search__search_text')} />
        </>
    )
}
