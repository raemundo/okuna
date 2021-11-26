import React from 'react'
import { View, Text } from 'react-native'
import twi, { tw } from "~/lib/tailwind";
import FontAwesomeIcon from "~/component-lib/FontAwesomeIcon";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

export default function OkHashtagAvatar() {
    return (
        <FontAwesomeIcon
            icon={faCoffee}
            size="2x"
            style={{ paddingRight: 10 }}
        />
    )
}
