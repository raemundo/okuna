import React from 'react'
import { View, Text } from 'react-native'
import twi, { tw } from "~/lib/tailwind";

export default function OkDesktopCommunityProfileHeaderBarStats() {
    return (
        <>
            <View style={tw`hidden mx-2 md:flex`}>
                <Text style={tw`font-bold text-black dark:text-white`}>Addicts</Text>
                <Text style={tw`font-bold text-black dark:text-white`}>210</Text>
            </View>
            <View style={tw`hidden mx-2 md:flex`}>
                <Text style={tw`font-bold text-black dark:text-white`}>Addicts</Text>
                <Text style={tw`font-bold text-black dark:text-white`}>210</Text>
            </View>
        </>
    )
}
