import React from 'react'
import { View, Text } from 'react-native'
import twi, { tw } from "~/lib/tailwind";

export default function OkFatButton({text, children, textColor="yellow-500"}) {
    return (
        <View style={tw`bg-white rounded-lg justify-between`}>
            {children}
            <Text style={tw`bg-${textColor} rounded-b-lg text-white text-center`}>{text}</Text>
        </View>
    )
}
