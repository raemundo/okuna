import React from 'react'
import { View, Text } from 'react-native'
import twi, { tw } from "~/lib/tailwind";
import OkHomePage from "~/layouts/OkHomePage";
import OkMobileHeader from "~/components/mobile-only/OkMobileHeader";
import OkHashtagBanner from "~/components/tiles/OkHashtagBanner";
import OkHashtagPostsStream from "~/components/posts-stream/OkHashtagPostsStream";

export default function OkHashtagPage() {
    return (
        <OkHomePage>
            <View style={tw`w-full mx-auto mt-5 lg:w-6/12`}>
                <OkHashtagPostsStream />
            </View>
        </OkHomePage>
    )
}
