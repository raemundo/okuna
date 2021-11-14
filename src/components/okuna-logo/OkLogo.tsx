import React from 'react'
import { View, Text, Image } from 'react-native'
import { t } from "~/lib/tailwind"
import logo from "./assets/logo.png";

export default function OkLogo() {
    return (
        <Image source={logo} style={t`h-10 w-10`} />
    )
}
