import React from 'react'
import { View, Text } from 'react-native'
import twi, { tw } from "~/lib/tailwind";
import OkUserNotifications from "~/components/OkUserNotifications";
import FontAwesomeIcon from "~/component-lib/FontAwesomeIcon";
import { faBell } from "@fortawesome/free-solid-svg-icons";

export default function OkUserNotificationsDropdown() {
    return (
        <>
            <FontAwesomeIcon style={twi`text-2xl text-black dark:text-white`} icon={faBell} />
            <OkUserNotifications />
        </>
    )
}
