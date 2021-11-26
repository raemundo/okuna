import React from 'react'
import { TextInput, Pressable } from 'react-native'
import FontAwesomeIcon from '~/component-lib/FontAwesomeIcon';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import twi, { tw } from '~/lib/tailwind'

export default function OkHeaderSearchBar() {
    return (
        <>
            <TextInput style={tw`hidden lg:flex border border-transparent rounded-lg bg-gray-200 py-2 pr-4 pl-10 w-full`} placeholder="search" />
            <Pressable style={(state) => [tw`flex lg:hidden mx-1 w-10 h-10 bg-gray-200 rounded-full items-center justify-center`, state.hovered && tw`bg-gray-300`]}>
                <FontAwesomeIcon style={twi`text-gray-500`} icon={faSearch} />
            </Pressable>
        </>
    )
}
