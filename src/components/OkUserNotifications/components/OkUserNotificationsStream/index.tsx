import React from 'react'
import { View, Text } from 'react-native'
import twi, { tw } from "~/lib/tailwind";
import Card from "~/component-lib/Card"
import OkUserNotification from "~/components/OkUserNotifications/components/notification/OkUserNotification";
import OkHttpList from "~/components/OkHttpList";

export default function OkUserNotificationsStream() {
    return (
        <Card style={tw`w-100 h-100`}>
            <OkHttpList listType="notification">
                <OkUserNotification />
            </OkHttpList>
        </Card>
    )
}
