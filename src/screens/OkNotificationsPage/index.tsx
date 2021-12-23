import React from 'react'
import { View, Text } from 'react-native'
import twi, { tw } from "~/lib/tailwind";
import OkHomePage from "~/layouts/OkHomePage";
import OkMobileHeader from "~/components/mobile-only/OkMobileHeader";
import OkUserNotifications from "~/components/OkUserNotifications";
export default function OkNotificationsPage() {
    return (
        <OkHomePage>
            <OkUserNotifications />
        </OkHomePage>
    )
}
