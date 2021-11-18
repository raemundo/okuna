import React from 'react'
import { View, Text } from 'react-native'
import tw, { t } from "~/lib/tailwind";

export default function OkCommunityProfileCategories() {
    return (
        <View style={t`flex-row`}>
            <Text style={t`bg-yellow-500 py-1 px-2 mx-1 rounded-xl`}>food</Text>
            <Text style={t`bg-yellow-500 py-1 px-2 mx-1 rounded-xl`}>food</Text>
        </View>
    )
}
