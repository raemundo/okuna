import React from 'react'
import { View, Text } from 'react-native'
import twi, { tw } from "~/lib/tailwind";
import OkDesktopUserProfileHeader from "./components/OkDesktopUserProfileHeader"
import OkDesktopUserProfileSidebar from "./components/OkDesktopUserProfileSidebar";
import OkDesktopUserProfileTimeline from "./components/OkDesktopUserProfileTimeline"


export default function OkDesktopUserProfilePage() {
    return (
        <View style={tw`w-9/12 h-full mx-auto mt-6`}>
            <OkDesktopUserProfileHeader />
            <View style={tw`flex-row flex-wrap h-full mt-2`}>
                <OkDesktopUserProfileSidebar />
                <OkDesktopUserProfileTimeline />
            </View>
        </View>
    )
}