import React from 'react'
import { View, Text } from 'react-native'
import twi, { tw } from "~/lib/tailwind";
import FontAwesomeIcon from "~/component-lib/FontAwesomeIcon"
import { faBaby, faMale } from '@fortawesome/free-solid-svg-icons';
export default function OkUserProfileAge({ style = {} }) {
    return (
        <View style={[tw`flex-row items-center`, style]}>
            <FontAwesomeIcon icon={true ? faBaby : faMale} />
            <Text style={tw`dark:text-white px-1`}>1y</Text>
        </View>
    )
}
