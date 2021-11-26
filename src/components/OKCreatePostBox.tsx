import React from 'react'
import { View, Text, Image, Pressable } from 'react-native'
import FontAwesomeIcon from "~/component-lib/FontAwesomeIcon";
import { faImages, faSmile, } from "@fortawesome/free-solid-svg-icons";
import twi, { tw } from "~/lib/tailwind"
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
const OKCreatePostBox = () => {
    return (
        <View style={tw`rounded-lg bg-white flex flex-col p-3 px-4 shadow border border-gray-300`}>
            <View style={tw`flex-row items-center border-b pb-3 mb-2`}>
                <View style={tw`w-10 h-10`}>
                    <Image
                        source={{ uri: "https://picsum.photos/200" }}
                        style={tw`w-full h-full rounded-full`}
                    />
                </View>
                <Pressable style={(state) => [tw`focus:bg-gray-300 focus:outline-none flex-grow bg-gray-100 text-gray-500 text-left pl-2 rounded-full h-10 pl-5`, state.hovered && tw`bg-gray-200`]}>
                    What's on your mind, Shihab?
                </Pressable>
            </View>
            <View style={tw`flex-row space-x-3 text-sm`}>
                <Pressable style={(state) => [tw`flex-1 flex-row items-center h-8 focus:outline-none focus:bg-gray-200 justify-center rounded-md`, state.hovered && tw`bg-gray-100`]}>
                    <FontAwesomeIcon icon={faYoutube} style={twi`text-red-500`} />
                    <View>
                        <Text style={tw`font-semibold text-gray-500`}>Create Video</Text>
                    </View>
                </Pressable>
                <Pressable style={(state) => [tw`flex-1 flex-row items-center h-8 focus:outline-none focus:bg-gray-200 justify-center rounded-md`, state.hovered && tw`bg-gray-100`]}>
                    <FontAwesomeIcon icon={faImages} style={twi`text-green-500`} />
                    <View>
                        <Text style={tw`font-semibold text-gray-500`}>Photos/Video</Text>
                    </View>
                </Pressable>
                <Pressable style={(state) => [tw`flex-1 flex-row items-center h-8 focus:outline-none focus:bg-gray-200 justify-center rounded-md`, state.hovered && tw`bg-gray-100`]}>
                    <FontAwesomeIcon icon={faSmile} style={twi`text-yellow-500`} />
                    <View>
                        <Text style={tw`font-semibold text-gray-500`}>Feeling/Activity</Text>
                    </View>
                </Pressable>
            </View>
        </View>
    )
}

export default OKCreatePostBox;