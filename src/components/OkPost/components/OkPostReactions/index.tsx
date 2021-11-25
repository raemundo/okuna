import React from 'react'
import { View } from 'react-native'
import { tw } from "~/lib/tailwind";
import OkEmojiReactionButton from "~/components/buttons/OkEmojiReactionButton";

export default function OkPostReactions() {
    return (
        <View style={tw`flex-row items-center justify-between px-3 pb-2 mb-2`}>
            <View style={tw`flex-row items-center text-sm`}>
                {[{ count: 15, emoji: '❤' }, { count: 10, emoji: '👍' }, { count: 11, emoji: '😁' }].map((item, idx) => (
                    <OkEmojiReactionButton key={idx} item={item} />
                ))}
            </View>
        </View>
    )
}
