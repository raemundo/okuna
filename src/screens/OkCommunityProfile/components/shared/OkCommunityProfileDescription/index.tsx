import OkSmartText from '~/components/smart-text/OkSmartText';
import React from 'react'
import { View, Text } from 'react-native'
import twi, { tw } from "~/lib/tailwind";

export default function OkCommunityProfileDescription() {
    return (
        <View style={tw`flex p-2`}>
            <OkSmartText
                text="A place for coffee enthusiast. Third wave and specialty coffee, brewing methods, roasting, cool, places, equipments, culture."
            />
        </View>
    )
}
