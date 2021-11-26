import React from 'react'
import { View, Pressable } from 'react-native'
import twi, { tw } from "~/lib/tailwind";
import FontAwesomeIcon from "~/component-lib/FontAwesomeIcon";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";

export default function OkCommunityProfileActionButtons() {
    return (
        <View style={tw`flex-row items-center justify-end my-6 w-3/12`}>
            <Pressable
                style={tw`px-4 py-2 border border-transparent rounded-md flex-row rounded-20 bg-blue-800 text-white font-semibold focus:outline-none`}
            >
                Leave
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
