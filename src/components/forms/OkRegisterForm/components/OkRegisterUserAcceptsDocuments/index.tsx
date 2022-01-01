import React from 'react'
import { View, Text } from 'react-native'
import twi, { tw } from "~/lib/tailwind";
import OkButtonsNavigation from "~/components/navigation/OkButtonsNavigation";
import { useTranslation } from 'react-i18next';

export default function OkRegisterUserAcceptsDocuments() {
    const {t} = useTranslation('')
    return (
        <>
            <Text style={tw`dark:text-white`}>{t('auth__create_acc__are_you_legal_age')}</Text>
            <OkButtonsNavigation />
        </>
    )
}
