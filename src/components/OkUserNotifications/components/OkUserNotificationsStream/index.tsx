import React from 'react'
import { View, Text } from 'react-native'
import twi, { tw } from "~/lib/tailwind";
import { Card } from "native-headless-ui"
import OkUserNotification from "~/components/OkUserNotifications/components/notification/OkUserNotification";
import OkHttpList from "~/components/OkHttpList";

export default function OkUserNotificationsStream() {
    return (
        <OkHttpList listType="notification">
            <OkUserNotification />
        </OkHttpList>
    )
}
