import React from 'react'
import { View, Text } from 'react-native'
import twi, { tw } from "~/lib/tailwind"

export default function Card({ children }) {
    return (
        <View style={tw`w-full h-auto my-2 bg-white border border-gray-300 rounded-md shadow dark:bg-black`}>
            {children}
        </View>
    )
}
