import React from 'react'
import { View, Text } from 'react-native'
import twi, { t } from "~/lib/tailwind";
import FontAwesomeIcon from "@/src/components/FontAwesomeIcon";
import { faSmile, faBook } from "@fortawesome/free-solid-svg-icons";

export default function OkCommunityProfileInfoButtons() {
    return (
        <View style={t`flex-row border-t border-gray-400 mt-5`}>
            <View style={t`flex-row m-2 p-1 items-center bg-gray-200 rounded-lg`}><FontAwesomeIcon style={twi`mx-1 text-gray-600`} icon={faSmile} /> <Text style={t`text-gray-600`}>Staff</Text></View>
            <View style={t`flex-row m-2 p-1 items-center bg-gray-200 rounded-lg`}><FontAwesomeIcon style={twi`mx-1 text-gray-600`} icon={faBook} />  <Text style={t`text-gray-600`}>Rules</Text></View>
        </View>
    )
}
