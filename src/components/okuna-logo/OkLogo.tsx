import React from 'react'
import { View, Text, Image } from 'react-native'
import { tw } from "~/lib/tailwind"
import logo from "./assets/logo.png";

export default function OkLogo() {
    return (
        <Image source={logo} style={tw`h-10 w-10`} />
    )
}
