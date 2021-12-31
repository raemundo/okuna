import React from 'react'
import { View, Text } from 'react-native'
import twi, { tw } from "~/lib/tailwind";
import OkHomePage from "~/layouts/OkHomePage";
import OkUserMenu from "~/components/menus/OkUserMenu";

export default function OkMenuPage() {
    return (
        <OkHomePage>
            <OkUserMenu />
        </OkHomePage>
    )
}
