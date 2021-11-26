

import React from "react";
import { View, Text, TextInput, Pressable, ImageBackground } from 'react-native'
import twi, { tw } from "~/lib/tailwind";
import OkFooter from "~/components/layout/OkFooter";
import OkModals from '~/layouts/OKHomePage/components/OkModals';
import bg from "./assets/emojis-bg.png"
// import ensureHasNoStoredAuthToken from '~/middleware/ensure-has-no-stored-auth-token';
const t = (txt) => txt;

export default function OkAuthPage({ children }) {
    return (
        <View style={[tw`flex-wrap flex-col-reverse lg:flex-row items-stretch`, { minHeight: '100vh' }]}>
            <View style={tw`flex-1 justify-center items-center m-0`}>
                <Text style={tw`text-3xl font-bold`}>
                    {t('pages.auth.title')}
                </Text>
                <Text>
                    <Text>🏡</Text>
                    {t('pages.auth.usps.friends')}
                </Text>

                <Text>
                    <Text>🙈️</Text>
                    {t('pages.auth.usps.privacy')}
                </Text>

                <Text>
                    <Text>😍</Text>
                    {t('pages.auth.usps.revenue')}
                </Text>

                <Text>
                    <Text>🛀</Text>
                    {t('pages.auth.usps.mental_health')}
                </Text>

                <Text>
                    <Text>🌎</Text>
                    {t('pages.auth.usps.planet')}
                </Text>

                <OkFooter />
            </View>
            <ImageBackground
                source={{ uri: "/assets/emojis-bg.png" }}
                style={tw`flex-1 justify-center items-center bg-gray-50`}
                resizeMode="stretch"
            >
                {children}
            </ImageBackground>
        </View>
    )
}
