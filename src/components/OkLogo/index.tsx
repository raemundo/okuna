import React from 'react'
import { View, Text, Image } from 'react-native'
import { tw } from "~/lib/tailwind"
import logo from "./assets/logo.png";

export default function OkLogo({style}) {
    const getStyle = style ?? {}
    return (
        <View style={[tw`flex-row items-center p-2.5`, getStyle]}>
            <Image source={logo} style={tw`w-8 h-8 md:h-10 md:w-10`} />
            <Text style={tw`hidden text-xl font-semibold text-black md:flex dark:text-white`}>Okuna</Text>
        </View>
    )
}
