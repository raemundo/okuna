import React from 'react'
import { Text } from 'react-native'
import twi, { tw } from "~/lib/tailwind";

export default function OkPostText() {
    return (
        <Text style={tw`text-gray-500 px-3`}>This is caption</Text>
    )
}
