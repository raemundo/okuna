import React from 'react'
import { View, Text } from 'react-native'
import twi, { tw } from "~/lib/tailwind";
import OkCommentPostButton from "./components/OkCommentPostButton"
import OkReactToPostButton from "./components/OkReactToPostButton"

export default function OkPostActions() {
    return (
        <View style={tw`flex-row justify-around text-gray-400 mb-4`}>
            <OkCommentPostButton />
            <OkReactToPostButton />
        </View>
    )
}
