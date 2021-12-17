import React from 'react'
import { ImageBackground } from 'react-native'
import twi, { tw } from "~/lib/tailwind";

export default function OkUserCover() {
    return (
        <ImageBackground
            source={{ uri: "https://picsum.photos/720" }}
            imageStyle={tw`rounded-t-2`}
            style={tw`h-96 w-full rounded-t-4`}
        ></ImageBackground>
    )
}
