import React from 'react'
import { View, Text } from 'react-native'
import twi, { tw } from "~/lib/tailwind";

export default function OkDesktopUserProfileHeaderBarStats() {
    return (
        <>
            <View style={tw`hidden mx-2 md:flex`}>
                <Text style={tw`font-bold text-black dark:text-white`}>Post</Text>
                <Text style={tw`font-bold text-black dark:text-white`}>1.2K</Text>
            </View>
            <View style={tw`hidden mx-2 md:flex`}>
                <Text style={tw`font-bold text-black dark:text-white`}>Following</Text>
                <Text style={tw`font-bold text-black dark:text-white`}>20K</Text>
            </View>
        </>
    )
}
