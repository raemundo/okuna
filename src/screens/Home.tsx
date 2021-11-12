import React from "react";
import { View, Text } from "react-native";
import { t } from "~/lib/tailwind"

function Home() {
    return (
        <View>
            <Text style={t`text-2xl font-bold text-center text-red-500 md:text-yellow-500 lg:text-green-500`}>
                ¡Hola, Mundo!
            </Text>
        </View>
    )
}

export default Home;
