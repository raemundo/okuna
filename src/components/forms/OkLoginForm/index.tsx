import React from 'react'
import { View, Text, TextInput, Pressable } from 'react-native'
import twi, { tw } from "~/lib/tailwind";
import { useTranslation } from "react-i18next";
import Link from 'next-rn/link';

export default function OkLoginForm() {
    const { t } = useTranslation();
    return (
        <>
            <Text style={tw`text-lg font-bold dark:text-gray-500`}>
                {t('auth__login__username_label')}
            </Text>
            <TextInput style={tw`bg-gray-100 p-2 rounded-3xl text-lg`} placeholder={t('auth__create_acc__username_placeholder')} />

            <Text style={tw`text-lg font-bold dark:text-gray-500`}>
                {t('auth__login__password_label')}
            </Text>
            <TextInput style={tw`bg-gray-100 p-2 rounded-3xl text-lg`} placeholder="e.g. johntravolta" />
            <Link routeName="" style={tw`text-gray-500`}>{t('auth__login__forgot_password')}</Link>
            <Pressable style={tw`mt-5 bg-green-500 p-3 rounded-3xl text-xl text-center text-white font-bold`}>
                {t('auth__login')}
            </Pressable>
        </>
    )
}
