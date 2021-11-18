import React from "react";
import OKHeader from "./components/header/OkHeader";
import {
    View,
} from "react-native";
import { t } from "~/lib/tailwind";
function OKHomePage({ children }) {
    return (
        <>
            <OKHeader />
            <View style={t`bg-gray-50`}>
                {children}
            </View>
        </>
    )
}

export default OKHomePage;
