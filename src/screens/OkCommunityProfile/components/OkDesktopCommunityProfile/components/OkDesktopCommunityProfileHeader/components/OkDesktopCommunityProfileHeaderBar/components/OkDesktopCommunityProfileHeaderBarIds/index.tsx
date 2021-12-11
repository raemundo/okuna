import React from 'react'
import { View, Text } from 'react-native'
import twi, { tw } from "~/lib/tailwind";

export default function OkDesktopCommunityProfileHeaderBarIds() {
    return (
        <View style={tw`mx-2`}>
            <Text style={tw`font-bold text-gray-500 dark:text-white`}>Coffe</Text>
            <Text style={tw`font-medium text-gray-500 dark:text-white`}>c/coffee</Text>
        </View>
    )
}
