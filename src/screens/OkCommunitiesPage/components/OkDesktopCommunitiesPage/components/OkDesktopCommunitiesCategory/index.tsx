import React from 'react'
import { View, Text } from 'react-native'
import twi, { tw } from "~/lib/tailwind";

import OkCategoryPreviewButton from "~/components/buttons/OkCategoryPreviewButton";
import OkFatButton from "~/components/buttons/OkFatButton";
import OkUserAvatar from "~/components/avatars/OkUserAvatar";
import OkHttpList from "~/components/OkHttpList";
import OkCommunityCard from '~/components/cards/OkCommunityCard';

export default function OkDesktopCommunitiesCategory() {
    return (
        <OkHttpList listType="community">
            <OkCommunityCard />
        </OkHttpList>
    )
}
