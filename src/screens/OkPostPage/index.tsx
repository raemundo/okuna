import React from 'react'
import { View, Text } from 'react-native'
import twi, { tw } from "~/lib/tailwind";
import OkHomePage from "~/layouts/OkHomePage";
import OkDesktopPostPage from "./OkDesktopPostPage";
import OkMobilePostPage from "./OkMobilePostPage";

export default function OkPostPage() {
    return (
        <OkHomePage>
            {twi.prefixMatch('md') && <OkDesktopPostPage />}
            {!twi.prefixMatch('md') && <OkMobilePostPage />}
        </OkHomePage>
    )
}
