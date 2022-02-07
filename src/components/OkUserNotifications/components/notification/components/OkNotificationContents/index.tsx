import React from 'react'
import { View, Text, Pressable } from 'react-native'
import twi, { tw } from "~/lib/tailwind";
import Avatar from 'native-headless-ui/src/components/Avatar';

import OkUserAvatar from "~/components/avatars/OkUserAvatar";
import OkCommunityAvatar from "~/components/avatars/OkCommunityAvatar";

import OkNotificationReaction from "../OkNotificationReaction";
import OkNotificationPreview from "../OkNotificationPreview";

export default function OkNotificationContents() {
    return (
        <>
            <View style={tw`flex-row`}>
                <Pressable style={(state) => [tw`flex-1 p-3 text-center border-b-2 border-gray-300`, state.hovered && tw`border-yellow-300`]}><Text style={tw`font-bold text-black dark:text-white`}>General</Text></Pressable>
                <Pressable style={(state) => [tw`flex-1 p-3 text-center border-b-2 border-gray-300`, state.hovered && tw`border-yellow-300`]}><Text style={tw`font-bold text-black dark:text-white`}>Requests</Text></Pressable>
            </View>
            <View style={tw`flex-row items-start p-3 px-4`}>
                <Avatar
                    source={{ uri: "https://picsum.photos/200" }}
                    style={tw`w-10 h-10 rounded-lg`}
                />
                <View style={tw``}>
                    <Text style={[tw`text-gray-500 dark:text-white`, { maxWidth: 300 }]}>
                        Saiful Islam
                        <Text style={tw`text-xs font-bold text-gray-700`}>@saiful</Text>
                        Reacted to your post comment
                    </Text>
                    <Text style={tw`mx-2 text-xs text-gray-300`}>2d</Text>
                </View>
                <OkNotificationReaction />
                <OkNotificationPreview />
            </View>
        </>
    )
}
