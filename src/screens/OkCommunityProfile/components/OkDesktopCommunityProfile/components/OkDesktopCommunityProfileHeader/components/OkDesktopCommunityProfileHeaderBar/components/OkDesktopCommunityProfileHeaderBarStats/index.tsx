import React from 'react'
import { View, Text } from 'react-native'
import twi, { tw } from "~/lib/tailwind";

export default function OkDesktopCommunityProfileHeaderBarStats() {
    return (
        <>
            <View style={tw`hidden md:flex mx-2`}>
                <Text>Addicts</Text>
                <Text style={tw`font-bold`}>210</Text>
            </View>
            <View style={tw`hidden md:flex mx-2`}>
                <Text>Addicts</Text>
                <Text style={tw`font-bold`}>210</Text>
            </View>
        </>
    )
}
