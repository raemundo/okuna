import React from "react";
import OkHeader from "./components/OkHeader";
import {
    View,
} from "react-native";
import { tw } from "~/lib/tailwind";
function OkHomePage({ children }) {
    return (
        <>
            <OkHeader />
            <View style={tw`bg-gray-50 dark:bg-gray-900`}>
                {children}
            </View>
        </>
    )
}

export default OkHomePage;
