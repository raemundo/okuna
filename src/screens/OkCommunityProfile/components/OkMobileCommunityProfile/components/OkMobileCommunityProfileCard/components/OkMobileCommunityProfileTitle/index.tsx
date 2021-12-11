import React from 'react'
import { View, Text } from 'react-native'
import twi, { tw } from "~/lib/tailwind";

export default function OkMobileCommunityProfileTitle() {
    return (
        <Text style={tw`px-2 font-medium text-gray-500 dark:text-white`}>c/coffee</Text>
    )
}
