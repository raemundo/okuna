import React from 'react'
import { View, Text, Pressable } from 'react-native'
import twi, { tw } from "~/lib/tailwind";
import FontAwesomeIcon from "~/component-lib/FontAwesomeIcon";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";

export default function OkCommunityProfileActionButtons() {
    return (
        <View style={tw`flex-row items-center justify-end w-3/12 my-6`}>
            <Pressable
                style={tw`flex-row px-4 py-2 font-semibold text-white bg-blue-800 border border-transparent rounded-md rounded-20 focus:outline-none`}
            >
                <Text style={tw`font-bold text-white`}>Leave</Text>
            </Pressable>
            <Pressable
                style={(state) => [
                    tw`px-3 py-1.5 flex-row rounded-md font-semibold focus:outline-none`,
                    state.hovered && tw`bg-gray-200 rounded-full`,
                ]}
            >
                <FontAwesomeIcon icon={faEllipsisV} />
            </Pressable>
        </View>
    )
}
