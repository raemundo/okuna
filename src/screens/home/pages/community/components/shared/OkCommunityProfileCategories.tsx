import React from 'react'
import { View, Text } from 'react-native'
import twi, { tw } from "~/lib/tailwind";

export default function OkCommunityProfileCategories() {
    return (
        <View style={tw`flex-row`}>
            <Text style={tw`bg-yellow-500 py-1 px-2 mx-1 rounded-xl`}>food</Text>
            <Text style={tw`bg-yellow-500 py-1 px-2 mx-1 rounded-xl`}>food</Text>
        </View>
    )
}
