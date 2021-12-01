import React from 'react'
import { View, Text, Pressable } from 'react-native'
import twi, { tw } from "~/lib/tailwind";

export default function OkCategoryButton({ children, color}) {
    return (
        <Pressable style={(state) => [tw`px-2 py-1 mx-1 bg-${color}-500 rounded-xl`]}><Text style={tw`text-white`}>{children}</Text></Pressable>
    )
}
