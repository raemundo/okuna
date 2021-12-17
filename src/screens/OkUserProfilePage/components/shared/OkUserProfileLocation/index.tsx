import React from 'react'
import { View, Text } from 'react-native'
import twi, { tw } from "~/lib/tailwind";
import FontAwesomeIcon from '~/component-lib/FontAwesomeIcon';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

export default function OkUserProfileLocation({ style = {} }) {
    return (
        <View style={[tw`flex-row items-center`, style]}>
            <FontAwesomeIcon icon={faMapMarkerAlt} />
            <Text style={tw`dark:text-white px-1`}>France</Text>
        </View>
    )
}
