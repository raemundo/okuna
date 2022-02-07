import React from 'react'
import { View, Text } from 'react-native'
import twi, { tw } from "~/lib/tailwind";
import FontAwesomeIcon from "~/component-lib/FontAwesomeIcon";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import OkImageAvatar from "~/components/avatars/OkImageAvatar";
import OkLetterAvatar from "~/components/avatars/OkLetterAvatar";
import Avatar from "native-headless-ui/src/components/Avatar";

export default function OkCommunityAvatar({style}) {
    return (
        <>
            <Avatar source={{ uri: 'https://picsum.photos/200' }} style={[tw`w-18 h-18`, style]} />
        </>
    )
}
