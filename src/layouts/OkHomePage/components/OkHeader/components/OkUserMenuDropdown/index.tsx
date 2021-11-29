import React from 'react'
import { View, Text, Pressable, Image } from 'react-native'
import FontAwesomeIcon from "~/component-lib/FontAwesomeIcon";
import { faSortDown } from "@fortawesome/free-solid-svg-icons";
import twi, { tw } from "~/lib/tailwind";
import OkUserAvatar from "~/components/avatars/OkUserAvatar";
import Avatar from '~/component-lib/Avatar';

export default function OkUserMenuDropdown() {
    return (
        <Pressable style={(state) => [
            tw`flex-row items-center justify-between px-2 py-1 bg-gray-200 rounded-full`,
            state.hovered && tw`bg-gray-300`
        ]}>
            <Avatar source={{ uri: 'https://picsum.photos/200' }} style={tw`w-6 h-6`} />
            <Text style={tw`hidden mx-4 text-sm font-semibold md:flex`}>Saiful</Text>
            <FontAwesomeIcon icon={faSortDown} />
        </Pressable >
    )
}
