import React from 'react'
import { View, Text, ImageBackground } from 'react-native'
import twi, { tw } from "~/lib/tailwind";
import OkCommunityAvatar from "~/components/avatars/OkCommunityAvatar";

export default function OkCommunityTile() {
    return (
        <ImageBackground
            source={{ uri: "https://picsum.photos/720" }}
            imageStyle={tw`rounded-lg`}
            style={[tw`flex-row items-center w-full p-5 my-2 rounded-lg h-30`]}
        >
            <OkCommunityAvatar style={tw`w-8 h-8 rounded-lg`} />
            <View style={tw`mx-2`}>
                <Text style={tw`text-white`}>/c/programmers</Text>
                <Text style={tw`font-bold text-white`}>Programmers</Text>
                <Text style={tw`text-white`}>18k members</Text>
            </View>
        </ImageBackground>
    )
}
