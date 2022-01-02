import React from 'react'
import { View, Text, StyleSheet, ImageBackground } from 'react-native'
import twi, { tw } from "~/lib/tailwind";

export default function OkFatButton({ text, children, textBackgroundColor = "yellow", textColor = "white", backgroundImageSrc }) {
    return (
        <View style={tw`justify-between w-32 h-20 m-3 bg-white rounded-lg`}>
            {
                backgroundImageSrc
                    ?
                    <ImageBackground
                        source={{ uri: backgroundImageSrc }}
                        imageStyle={tw`rounded-t-lg`}
                        style={tw`w-full h-full rounded-t-4`}
                    ></ImageBackground>
                    :
                    children
            }

            <Text style={[
                tw`text-center text-white rounded-b-lg`,
                StyleSheet.create({ x: { backgroundColor: textBackgroundColor, color: textColor } }).x
            ]}>{text}</Text>
        </View>
    )
}