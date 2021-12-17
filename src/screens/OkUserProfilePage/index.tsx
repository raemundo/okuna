import React from 'react'
import { View, Text } from 'react-native'
import twi, { tw } from "~/lib/tailwind";
import OkHomePage from "~/layouts/OkHomePage";
import OkDesktopUserProfilePage from './components/OkDesktopUserProfilePage/';
import OkMobileUserProfilePage from './components/OkMobileUserProfilePage/';

export default function OkUserProfilePage() {
    return (
        <OkHomePage>
            {twi.prefixMatch('md') && <OkDesktopUserProfilePage />}
            {!twi.prefixMatch('md') && <OkMobileUserProfilePage />}
        </OkHomePage>
    )
}
