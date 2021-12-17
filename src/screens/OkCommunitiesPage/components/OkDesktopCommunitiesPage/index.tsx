import React from 'react'
import { View, Text, ImageBackground } from 'react-native'
import twi, { tw } from "~/lib/tailwind";


import OkCategoryPreviewButton from "~/components/buttons/OkCategoryPreviewButton";
import OkFatButton from "~/components/buttons/OkFatButton";
import OkUserAvatar from "~/components/avatars/OkUserAvatar";
import OkDesktopCommunitiesCategory from "./components/OkDesktopCommunitiesCategory";
import OkDesktopCommunitiesYouCategory from "./components/OkDesktopCommunitiesYouCategory";
import { useTranslation } from 'react-i18next';

export default function OkDesktopCommunitiesPage() {
    const { t } = useTranslation();
    return (
        <View style={tw`flex-row justify-between`}>
            <OkFatButton
                text={t('community__user_you_text')}
            >
                <OkUserAvatar />
            </OkFatButton>
            <OkFatButton
                textColor="black"
                text={t('community__communities_all_text')}
            >
                <ImageBackground
                    source={{ uri: "https://picsum.photos/720" }}
                    imageStyle={tw`rounded-t-lg`}
                    style={tw`h-20 w-20 rounded-t-4`}
                ></ImageBackground>
            </OkFatButton>
            <OkDesktopCommunitiesCategory />
        </View>
    )
}
