import React from 'react'
import { View, Text } from 'react-native'
import twi, { tw } from "~/lib/tailwind";
import FontAwesomeIcon from "~/component-lib/FontAwesomeIcon";
import { faSmile, faBook } from "@fortawesome/free-solid-svg-icons";

export default function OkCommunityProfileInfoButtons() {
    return (
        <View style={tw`flex-row`}>
            <View style={tw`flex-row items-center p-1 m-2 bg-gray-200 rounded-lg`}><Text style={tw`text-gray-600`}><FontAwesomeIcon style={twi`text-gray-600`} icon={faSmile} /> Staff</Text></View>
            <View style={tw`flex-row items-center p-1 m-2 bg-gray-200 rounded-lg`}><Text style={tw`text-gray-600`}><FontAwesomeIcon style={twi`text-gray-600`} icon={faBook} /> Rules</Text></View>
        </View>
    )
}
