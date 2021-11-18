import React from 'react'
import { View, Text } from 'react-native'
import tw, { t } from "~/lib/tailwind";
import FontAwesomeIcon from "@/src/components/FontAwesomeIcon";
import { faGlobeAmericas, faSmile, faBook } from "@fortawesome/free-solid-svg-icons";

export default function OkDesktopCommunityProfileSidebar() {
    return (
        <View style={t`w-full md:w-2/6 mt-1`}>
            <View
                style={t`bg-white rounded-lg p-3 shadow border border-gray-300`}
            >
                <View style={t`mb-2 `}>
                    <Text style={t`font-bold text-sm text-gray-400`}>About</Text>
                </View>
                <View style={t`flex p-2`}>
                    <Text>
                        A place for coffee enthusiast. Third wave and specialty coffee, brewing methods, roasting, cool, places, equipments, culture.
                    </Text>
                </View>

                <View style={t`flex-row border-t border-gray-400 mt-5`}>
                </View>
                <View style={t`flex-row mt-5`}>
                    <FontAwesomeIcon icon={faGlobeAmericas} style={tw`px-2 text-gray-500`} /> <Text style={t`text-gray-500`}>Public</Text>
                </View>
                <View style={t`flex-row`}>
                    <Text style={t`bg-yellow-500 py-1 px-2 mx-1 rounded-xl`}>food</Text>
                    <Text style={t`bg-yellow-500 py-1 px-2 mx-1 rounded-xl`}>food</Text>
                </View>
                <View style={t`flex-row border-t border-gray-400 mt-5`}>
                    <View style={t`flex-row m-2 p-1 bg-gray-200 rounded-lg`}><FontAwesomeIcon style={tw`text-gray-600`} icon={faSmile} /> <Text style={t`text-gray-600`}>Staff</Text></View>
                    <View style={t`flex-row m-2 p-1 bg-gray-200 rounded-lg`}><FontAwesomeIcon style={tw`text-gray-600`} icon={faBook} />  <Text style={t`text-gray-600`}>Rules</Text></View>
                </View>
            </View>
        </View>

    )
}
