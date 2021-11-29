import React from 'react'
import { Text } from 'react-native'
import twi, { tw } from "~/lib/tailwind";

export default function OkSmartTextHighlightedItem({ children }) {
    return (
        <Text style={tw`text-black dark:text-white`}>{children}</Text>
    )
}
