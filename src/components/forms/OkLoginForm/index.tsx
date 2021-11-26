import React from 'react'
import { View, Text, TextInput, Pressable } from 'react-native'
import twi, { tw } from "~/lib/tailwind";
const t = (txt) => txt;

export default function OkLoginForm() {
    return (
        <>
            <Text style={tw`text-lg font-bold`}>
                {t('global.keywords.username')}
            </Text>
            <TextInput style={tw`bg-gray-100 p-2 rounded-3xl text-lg`} placeholder="e.g. johntravolta" />

            <Text style={tw`text-lg font-bold`}>
                {t('global.keywords.password')}
            </Text>
            <TextInput style={tw`bg-gray-100 p-2 rounded-3xl text-lg`} placeholder="e.g. johntravolta" />

            <Pressable style={tw`mt-5 bg-green-500 p-3 rounded-3xl text-xl text-center text-white font-bold`}>
                {t('global.snippets.login')}
            </Pressable>
        </>
    )
}
