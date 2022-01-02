import React, { useState } from 'react'
import { View, Text, Pressable } from 'react-native'
import twi, { tw } from "~/lib/tailwind";
import OkUserNotifications from "~/components/OkUserNotifications";
import FontAwesomeIcon from "~/component-lib/FontAwesomeIcon";
import { faBell } from "@fortawesome/free-solid-svg-icons";

export default function OkUserNotificationsDropdown() {
    const [hidden, setHidden] = useState(true);
    return (
        <>
            <Pressable onPress={() => { setHidden(!hidden) }}>
                <FontAwesomeIcon style={twi`text-2xl text-black dark:text-white hidden lg:flex`} icon={faBell} />
            </Pressable>
            {!hidden && <OkUserNotifications style={tw`absolute rounded-lg z-100 w-100 h-100 top-12`} />}
        </>
    )
}
