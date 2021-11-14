import React from 'react'
import { View, Text, Image, Pressable } from 'react-native'
import FontAwesomeIcon from "~/components/FontAwesomeIcon";
import { faImages, faSmile, } from "@fortawesome/free-solid-svg-icons";
import tw, { t } from "~/lib/tailwind"
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
const OKCreatePostBox = () => {
    return (
        <View style={t`rounded-lg bg-white flex flex-col p-3 px-4 shadow border border-gray-300`}>
            <View style={t`flex-row items-center space-x-2 border-b pb-3 mb-2`}>
                <View style={t`w-10 h-10`}>
                    <Image
                        source={{ uri: "https://picsum.photos/200" }}
                        style={t`w-full h-full rounded-full`}
                    />
                </View>
                <Pressable style={t`hover:bg-gray-200 focus:bg-gray-300 focus:outline-none flex-grow bg-gray-100 text-gray-500 text-left pl-2 rounded-full h-10 pl-5`}>
                    What's on your mind, Shihab?
                </Pressable>
            </View>
            <View style={t`flex-row space-x-3 text-sm`}>
                <Pressable style={t`flex-1 flex-row items-center h-8 focus:outline-none focus:bg-gray-200 justify-center space-x-2 hover:bg-gray-100 rounded-md`}>
                    <FontAwesomeIcon icon={faYoutube} style={tw`text-red-500`} />
                    <View>
                        <Text style={t`font-semibold text-gray-500`}>Create Video</Text>
                    </View>
                </Pressable>
                <Pressable style={t`flex-1 flex-row items-center h-8 focus:outline-none focus:bg-gray-200 justify-center space-x-2 hover:bg-gray-100 rounded-md`}>
                    <FontAwesomeIcon icon={faImages} style={tw`text-green-500`} />
                    <View>
                        <Text style={t`font-semibold text-gray-500`}>Photos/Video</Text>
                    </View>
                </Pressable>
                <Pressable style={t`flex-1 flex-row items-center h-8 focus:outline-none focus:bg-gray-200 justify-center space-x-2 hover:bg-gray-100 rounded-md`}>
                    <FontAwesomeIcon icon={faSmile} style={tw`text-yellow-500`} />
                    <View>
                        <Text style={t`font-semibold text-gray-500`}>Feeling/Activity</Text>
                    </View>
                </Pressable>
            </View>
        </View>
    )
}

export default OKCreatePostBox;