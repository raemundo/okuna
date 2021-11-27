import React from 'react'
import { View, Text, Image } from 'react-native'
import { tw } from "~/lib/tailwind"
import logo from "./assets/logo.png";

export default function OkLogo({style}) {
    const getStyle = style ?? {}
    return (
        <View style={[tw`flex-row items-center justify-center`, getStyle]}>
            <Image source={logo} style={tw`h-10 w-10`} />
            <Text style={tw`text-xl`}>Okuna</Text>
        </View>
    )
}
