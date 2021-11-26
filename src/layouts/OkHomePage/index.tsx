import React from "react";
import OKHeader from "./components/OkHeader";
import {
    View,
} from "react-native";
import { tw } from "~/lib/tailwind";
function OkHomePage({ children }) {
    return (
        <>
            <OKHeader />
            <View style={tw`bg-gray-50`}>
                {children}
            </View>
        </>
    )
}

export default OkHomePage;
