import React from 'react'
import { View, Text } from 'react-native'
import twi, { tw } from "~/lib/tailwind";
import OkSmartText from "~/components/smart-text/OkSmartText";
import OkTranslateButton from "~/components/smart-text/components/OkTranslateButton";

export default function OkTranslatableSmartText() {
    return (
        <>
            <OkSmartText text="You are not allowed to disrupt our lives by posting this without explanation. I will not be able to get any work done now." />
            <OkTranslateButton />
        </>
    )
}
