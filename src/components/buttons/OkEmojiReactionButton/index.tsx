import React from 'react'
import { Pressable, Text } from 'react-native'
import twi, { tw } from "~/lib/tailwind";
import Twemoji from "~/component-lib/Twemoji"

export default function OkEmojiReactionButton({ item }) {
    return (
        <Pressable style={tw`bg-gray-200 dark:bg-gray-900 py-1 px-2 mx-1 rounded-xl flex-row items-center`}>
            <Twemoji>{item.emoji}</Twemoji><Text style={tw`dark:text-white`}>{item.count}</Text>
        </Pressable>
    )
}
