import React from 'react'
import { View, Text, Image } from 'react-native'
import { tw } from "~/lib/tailwind"
import logo from "./assets/logo.png";

export default function OkLogo({style}) {
    const getStyle = style ?? {}
    return (
        <View style={[tw`flex-row items-center p-2.5`, getStyle]}>
            <Image source={logo} style={tw`w-4 h-4 md:h-10 md:w-10`} />
            <Text style={tw`hidden text-xl font-semibold md:flex`}>Okuna</Text>
        </View>
    )
}
