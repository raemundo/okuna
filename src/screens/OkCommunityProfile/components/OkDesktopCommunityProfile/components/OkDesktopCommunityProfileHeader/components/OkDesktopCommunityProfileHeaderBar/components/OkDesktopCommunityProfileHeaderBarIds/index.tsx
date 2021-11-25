import React from 'react'
import { View, Text } from 'react-native'
import twi, { tw } from "~/lib/tailwind";

export default function OkDesktopCommunityProfileHeaderBarIds() {
    return (
        <View>
            <Text style={tw`font-bold`}>Coffe</Text>
            <Text>c/coffee</Text>
        </View>
    )
}
