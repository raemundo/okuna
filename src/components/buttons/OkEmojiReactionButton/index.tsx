import React from 'react'
import { Pressable } from 'react-native'
import twi, { tw } from "~/lib/tailwind";
import Twemoji from "~/component-lib/Twemoji"

export default function OkEmojiReactionButton({item}) {
    return (
        <Pressable style={tw`bg-gray-200 py-1 px-2 mx-1 rounded-xl flex-row items-center`}>
            <Twemoji>{item.emoji}{item.count}</Twemoji> 
        </Pressable>
    )
}
