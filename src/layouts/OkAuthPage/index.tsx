

import React from "react";
import { View, Text, TextInput, Pressable, ImageBackground } from 'react-native'
import twi, { tw } from "~/lib/tailwind";
import OkFooter from "~/components/layout/OkFooter";
import OkModals from '~/layouts/OkHomePage/components/OkModals';
import bg from "./assets/emojis-bg.png"
import Twemoji from "~/component-lib/Twemoji"
// import ensureHasNoStoredAuthToken from '~/middleware/ensure-has-no-stored-auth-token';
const t = (txt) => txt;

export default function OkAuthPage({ children }) {
    return (
        <View style={[tw`flex-wrap flex-col-reverse lg:flex-row items-stretch`, { minHeight: '100vh' }]}>
            <View style={tw`flex-1 justify-center items-center m-0`}>
                <View style={tw``}>
                    <Text style={tw`text-3xl font-bold`}>
                        {t('pages.auth.title')}
                    </Text>
                    <Text>
                        <Twemoji>
                            🏡 {t('pages.auth.usps.friends')}
                        </Twemoji>
                    </Text>

                    <Text>
                        <Twemoji>
                            🙈️ {t('pages.auth.usps.privacy')}
                        </Twemoji>
                    </Text>

                    <Text>
                        <Twemoji>
                            😍
                            {t('pages.auth.usps.revenue')}
                        </Twemoji>
                    </Text>

                    <Text>
                        <Twemoji>
                            🛀 {t('pages.auth.usps.mental_health')}
                        </Twemoji>
                    </Text>

                    <Text>
                        <Twemoji>
                            🌎 {t('pages.auth.usps.planet')}
                        </Twemoji>
                    </Text>
                </View>

                <OkFooter />
            </View>
            <ImageBackground
                source={{ uri: "/assets/emojis-bg.png" }}
                style={tw`flex-1 justify-center items-center bg-gray-50 p-4`}
                resizeMode="stretch"
            >
                {children}
            </ImageBackground>
        </View>
    )
}
