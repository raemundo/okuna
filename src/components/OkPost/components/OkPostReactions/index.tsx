import React from 'react'
import { View, Pressable } from 'react-native'
import twi, { tw } from "~/lib/tailwind";
import FontAwesomeIcon from "~/components/FontAwesomeIcon";
import { faHeart, faSurprise, faThumbsUp, } from "@fortawesome/free-solid-svg-icons";
import OkEmojiReactionButton from "~/components/buttons/OkEmojiReactionButton";

export default function OkPostReactions() {
    return (
        <View style={tw`flex-row items-center justify-between px-3 pb-2 mb-2`}>
            <View style={tw`flex-row items-center text-gray-400 text-sm`}>
                <Pressable style={tw`bg-gray-200 py-1 px-2 mx-1 rounded-xl text-red-500`}>
                    <FontAwesomeIcon icon={faHeart} />
                </Pressable>
                <Pressable style={tw`bg-gray-200 py-1 px-2 mx-1 rounded-xl text-blue-500`}>
                    <FontAwesomeIcon icon={faThumbsUp} />
                </Pressable>
                <Pressable style={tw`bg-gray-200 py-1 px-2 mx-1 rounded-xl text-yellow-500`}>
                    <FontAwesomeIcon icon={faSurprise} />
                </Pressable>
            </View>
        </View>
    )
}
