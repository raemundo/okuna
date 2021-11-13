import React from "react";
import { View, Text, TextInput } from "react-native";
import { t } from "~/lib/tailwind"
import Icon from 'react-native-vector-icons/Ionicons';
function Home() {
    return (
        <>
            <View style={t`flex-row justify-between items-center bg-red-200 border-b  border-gray-100 h-10`}>
                <View>LOGO</View>
                <TextInput style={t`border border-transparent rounded-lg bg-gray-200 py-2 pr-4 pl-10 w-full`} placeholder="search" />
                <View style={t`mx-6`}>ICONS

                    <Icon.Button
                        name="md-home"
                        backgroundColor="#3b5998"

                    />
                </View>
            </View>

            <View>

                <Text style={t`text-2xl font-bold text-center text-red-500 md:text-yellow-500 lg:text-green-500`}>
                    ¡Hola, Mundo!
                </Text>
            </View>
        </>
    )
}

export default Home;
