import React from 'react'
import { View, Text } from 'react-native'
import twi, { tw } from "~/lib/tailwind";
import Link from "next-rn/link";

export default function OkFooter() {
    return (
        <View style={tw`w-full md:flex-row flex-wrap justify-around`}>
            <Link routeName="home" web={{ path: "/" }}>About us</Link>
            <Link routeName="home" web={{ path: "/" }}>Privacy policy</Link>
            <Link routeName="home" web={{ path: "/" }}>Terms of use</Link>
            <Link routeName="home" web={{ path: "/" }}>Guidelines</Link>
            <Link routeName="home" web={{ path: "/" }}>Github</Link>
        </View>
    )
}
