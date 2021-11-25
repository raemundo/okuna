import React from 'react'
import { View, Text } from 'react-native'
import FontAwesomeIcon from "@/src/components/FontAwesomeIcon";
import { faGlobeAmericas } from "@fortawesome/free-solid-svg-icons";
import twi, { tw } from "~/lib/tailwind";
export default function OkCommunityProfileVisibility() {
    return (
        <View style={tw`flex-row mt-5`}>
            <FontAwesomeIcon icon={faGlobeAmericas} style={twi`px-2 text-gray-500`} /> <Text style={tw`text-gray-500`}>Public</Text>
        </View>
    )
}