import React from 'react'
import { View, Text } from 'react-native'
import twi, { tw } from "~/lib/tailwind";
import FontAwesomeIcon from '~/component-lib/FontAwesomeIcon';
import { faLink } from '@fortawesome/free-solid-svg-icons';

export default function OkUserProfileUrl({ style = {} }) {
    return (
        <View style={[tw`flex-row items-center`, style]}>
            <FontAwesomeIcon icon={faLink} />
            <Text style={tw`dark:text-white px-1`}>https://www.youtube.com/</Text>
        </View>
    )
}
