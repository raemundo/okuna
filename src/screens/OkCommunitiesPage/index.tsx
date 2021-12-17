import React from 'react'
import { View, Text } from 'react-native'
import twi, { tw } from "~/lib/tailwind";
import OkHomePage from "~/layouts/OkHomePage";
import OkDesktopCommunitiesPage from "./components/OkDesktopCommunitiesPage";
import OkMobileCommunitiesPage from "./components/OkMobileCommunitiesPage";
import OkNewCommunityAction from '~/components/actions/OkNewCommunityAction';

export default function OkCommunitiesPage() {
    return (
        <OkHomePage>
            {twi.prefixMatch('md') && <OkDesktopCommunitiesPage />}
            {!twi.prefixMatch('md') && <OkMobileCommunitiesPage />}
        </OkHomePage>
    )
}
