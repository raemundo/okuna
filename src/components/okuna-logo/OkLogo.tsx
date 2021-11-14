import React from 'react'
import { View, Text, Image } from 'react-native'
import { t } from "~/lib/tailwind"
import logo from "./assets/logo.png";

export default function OkLogo() {
    return (
        <View style={t`flex-row`}>
            <Image source={logo} style={t`h-10 w-10`} />
            <Text style={t`font-bold text-2xl`}>Okuna</Text>
        </View>
    )
}
