import React from 'react'
import { View, Text } from 'react-native'
import twi, { tw } from "~/lib/tailwind";
import Twemoji from '~/component-lib/Twemoji';

export default function OkNotificationReaction() {
    return (
        <Twemoji style={tw`w-10 h-10`}>😹</Twemoji>
    )
}
