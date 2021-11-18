import React from 'react'
import { View, Text, ImageBackground, Pressable } from 'react-native'
import { t } from "~/lib/tailwind";
import FontAwesomeIcon from "~/components/FontAwesomeIcon";
import { faEllipsisV, faCoffee } from "@fortawesome/free-solid-svg-icons";

export default function OkDesktopCommunityProfileHeader() {
    return (
        <View
            style={t`w-full shadow border border-gray-300 bg-white rounded-lg`}
        >
            <ImageBackground
                source={{ uri: "https://picsum.photos/720" }}
                imageStyle={t`rounded-t-2`}
                style={t`h-96 w-full rounded-t-4`}
            ></ImageBackground>
            <View style={t`w-auto flex-row flex-wrap items-center`}>
                <View style={t` flex-row justify-start mb-2 w-9/12`}>
                    <View style={t`flex-row items-center mx-2`}>
                        <FontAwesomeIcon
                            icon={faCoffee}
                            size="2x"
                            style={{ paddingRight: 10 }}
                        />
                        <View>
                            <Text style={t`font-bold`}>Coffe</Text>
                            <Text>c/coffee</Text>
                        </View>
                    </View>
                    <View style={t`hidden md:flex mx-2`}>
                        <Text>Addicts</Text>
                        <Text style={t`font-bold`}>210</Text>
                    </View>
                    <View style={t`hidden md:flex mx-2`}>
                        <Text>Addicts</Text>
                        <Text style={t`font-bold`}>210</Text>
                    </View>
                </View>

                <View style={t`flex-row items-center justify-end my-6 w-3/12`}>
                    <Pressable
                        style={t`px-4 py-2 border border-transparent rounded-md flex-row rounded-20 bg-blue-800 text-white font-semibold focus:outline-none`}
                    >
                        Leave
                    </Pressable>
                    <Pressable
                        style={(state) => [
                            t`px-3 py-1.5 flex-row rounded-md font-semibold focus:outline-none`,
                            state.hovered && t`bg-gray-200 rounded-full`,
                        ]}
                    >
                        <FontAwesomeIcon icon={faEllipsisV} />
                    </Pressable>
                </View>
            </View>
        </View>
    )
}
