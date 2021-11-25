import React from 'react'
import { View, Text, Pressable } from 'react-native'
import twi, { tw } from "~/lib/tailwind";
import FontAwesomeIcon from "~/components/FontAwesomeIcon";
import { faEllipsisV, faCoffee } from "@fortawesome/free-solid-svg-icons";

export default function OkDesktopCommunityProfileHeaderBar() {
    return (
        <View style={tw`w-auto flex-row flex-wrap items-center`}>
            <View style={tw` flex-row justify-start mb-2 w-9/12`}>
                <View style={tw`flex-row items-center mx-2`}>
                    <FontAwesomeIcon
                        icon={faCoffee}
                        size="2x"
                        style={{ paddingRight: 10 }}
                    />
                    <View>
                        <Text style={tw`font-bold`}>Coffe</Text>
                        <Text>c/coffee</Text>
                    </View>
                </View>
                <View style={tw`hidden md:flex mx-2`}>
                    <Text>Addicts</Text>
                    <Text style={tw`font-bold`}>210</Text>
                </View>
                <View style={tw`hidden md:flex mx-2`}>
                    <Text>Addicts</Text>
                    <Text style={tw`font-bold`}>210</Text>
                </View>
            </View>

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
        </View>
    )
}
