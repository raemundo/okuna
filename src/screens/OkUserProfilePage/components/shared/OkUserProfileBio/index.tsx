import OkSmartText from '~/components/smart-text/OkSmartText';
import React from 'react'
import { View, Text } from 'react-native'
import twi, { tw } from "~/lib/tailwind";

export default function OkUserProfileBio() {
    return (
        <View style={tw`p-2`}>
            <OkSmartText text="Digital right activist building people-centric responsible, sustainable and fair technology for a more prosperous tomorrow" />
        </View>
    )
}
