import React from 'react'
import { TextInput, Pressable } from 'react-native'
import FontAwesomeIcon from '~/component-lib/FontAwesomeIcon';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import twi, { tw } from '~/lib/tailwind'

export default function OkHeaderSearchBar() {
    return (
        <>
            <TextInput style={tw`hidden md:flex flex-1 border border-transparent rounded-2xl bg-gray-100 py-2 px-4`} placeholder="search" />
        </>
    )
}
