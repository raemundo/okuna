import React from 'react'
import { View, Text } from 'react-native'
import twi, { tw } from "~/lib/tailwind";
import OkUserNotificationsStream from "~/components/OkUserNotifications/components/OkUserNotificationsStream";
import Card from 'native-headless-ui/src/components/Card';

export default function OkUserNotifications({ style }) {
    return (
        <Card style={style}>
            <OkUserNotificationsStream />
        </Card>
    )
}
