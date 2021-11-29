import React from 'react'
import { View, Text } from 'react-native'
import twi, { tw } from "~/lib/tailwind";

export default function OkDesktopCommunityProfileHeaderBarIds() {
    return (
        <View>
            <Text style={tw`font-bold text-black dark:text-white`}>Coffe</Text>
            <Text style={tw`font-bold text-black dark:text-white`}>c/coffee</Text>
        </View>
    )
}
