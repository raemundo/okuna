import React from "react";
import OKHeader from "./components/header/OkHeader";
import OKCreatePostBox from "./OKCreatePostBox";
import OKProfileScreen from "./OkProfileScreen";
import OKPost from "./OKPost";
import { View, Text, Image, TextInput, Pressable } from 'react-native'
import tw, { t } from "~/lib/tailwind"
function OKHomePage({ children }) {
    return (
        <>
            <OKHeader />
            {/* <View style={t`bg-gray-100 h-[1500px] items-center`}>
                <View style={t`w-6/12 bg-gray-100`}>
                    <OKCreatePostBox />
                    <OKPost />
                </View>
            </View> */}
            <OKProfileScreen />
            {children}
        </>
    )
}

export default OKHomePage;
