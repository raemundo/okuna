import React from 'react'
import { TextInput } from 'react-native'
import { t } from '~/lib/tailwind'

export default function OkHeaderSearchBar() {
    return (
        <TextInput style={t`hidden lg:flex border border-transparent rounded-lg bg-gray-200 py-2 pr-4 pl-10 mx-6 w-full`} placeholder="search" />
    )
}
