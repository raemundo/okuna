import React from 'react'
import { ImageBackground } from 'react-native'
import twi, { tw } from "~/lib/tailwind";

export default function OkCommunityCover({style={}}) {
    return (
        <ImageBackground
            source={{ uri: "https://picsum.photos/720" }}
            imageStyle={tw`rounded-t-2`}
            style={[tw`w-full h-96 rounded-t-4`, style]}
        ></ImageBackground>
    )
}
