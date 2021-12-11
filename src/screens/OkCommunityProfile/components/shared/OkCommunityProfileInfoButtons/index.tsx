import React from 'react'
import { View, Text, Pressable } from 'react-native'
import twi, { tw } from "~/lib/tailwind";
import FontAwesomeIcon from "~/component-lib/FontAwesomeIcon";
import { faSmile, faBook } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from 'react-i18next';


export default function OkCommunityProfileInfoButtons() {
    const { t } = useTranslation()
    return (
        <View style={tw`flex-row my-2`}>
            <Pressable style={(state) => [tw`flex-row items-center py-1 px-3 m-1 bg-gray-200 rounded-xl`]}>
                <Text style={tw`text-gray-600`}><FontAwesomeIcon style={twi`text-gray-500`} icon={faSmile} /> {t('community__button_staff')}</Text>
            </Pressable>
            <Pressable style={(state) => [tw`flex-row items-center py-1 px-3 m-1 bg-gray-200 rounded-xl`]}>
                <Text style={tw`text-gray-600`}><FontAwesomeIcon style={twi`text-gray-500`} icon={faBook} /> {t('community__button_rules')}</Text>
            </Pressable>
        </View>
    )
}
