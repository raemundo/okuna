import React from 'react'
import { View, Text, Image } from 'react-native'
import { tw } from "~/lib/tailwind"
import logo from "./assets/logo.png";

export default function OkLogo({style}) {
    const getStyle = style ?? {}
    return (
        <View style={[tw`flex-row items-center justify-center p-2.5`, getStyle]}>
            <Image source={logo} style={tw`h-4 w-4 md:h-10 md:w-10`} />
            <Text style={tw`text-xl font-semibold hidden md:flex`}>Okuna</Text>
        </View>
    )
}
