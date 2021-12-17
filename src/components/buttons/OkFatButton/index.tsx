import React from 'react'
import { View, Text } from 'react-native'
import twi, { tw } from "~/lib/tailwind";

export default function OkFatButton({text, children, color="yellow"}) {
    return (
        <View style={tw`bg-white rounded-lg`}>
            {children}
            <Text style={tw`bg-${color}-500 rounded-b-lg`}>{text}</Text>
        </View>
    )
}
