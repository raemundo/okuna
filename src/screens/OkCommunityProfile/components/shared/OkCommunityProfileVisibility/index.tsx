import React from 'react'
import { View, Text } from 'react-native'
import FontAwesomeIcon from "~/component-lib/FontAwesomeIcon";
import { faGlobeAmericas } from "@fortawesome/free-solid-svg-icons";
import twi, { tw } from "~/lib/tailwind";
import { useTranslation } from 'react-i18next';

export default function OkCommunityProfileVisibility() {
    const { t } = useTranslation();
    return (
        <View style={tw`flex-row items-center mt-5`}>
            {true ?
                (
                    <>
                        <FontAwesomeIcon icon={faGlobeAmericas} size="2x" style={twi`px-2 text-gray-500`} />
                        <Text style={tw`text-gray-500 `}>{t('community__type_public')}</Text>
                    </>
                )
                :
                (
                    <>
                        <FontAwesomeIcon icon={faGlobeAmericas} size="2x" style={twi`px-2 text-gray-500`} />
                        <Text style={tw`text-gray-500 `}>{t('community__type_private')}</Text>
                    </>
                )
            }
        </View>
    )
}
