import React from 'react'
import { View, Text } from 'react-native'
import { useTranslation } from 'react-i18next';
import twi, { tw } from "~/lib/tailwind";

import OkCategoryPreviewButton from "~/components/buttons/OkCategoryPreviewButton";
import OkFatButton from "~/components/buttons/OkFatButton";
import OkUserAvatar from "~/components/avatars/OkUserAvatar";
import OkMobileCommunitiesCategory from "./components/OkMobileCommunitiesCategory";
import OkMobileCommunitiesYouCategory from './components/OkMobileCommunitiesYouCategory';
import OkMobileHeader from '~/components/mobile-only/OkMobileHeader';

export default function OkMobileCommunitiesPage() {
    const { t } = useTranslation();
    return (
        <View style={tw`w-11/12 h-full mx-auto`}>
            <View style={tw`flex-row flex-wrap`}>
                <OkFatButton
                    text={t('community__user_you_text')}
                    textColor='black'
                >
                    <OkUserAvatar />
                </OkFatButton>
                <OkFatButton
                    textBackgroundColor="black"
                    text={t('community__communities_all_text')}
                    backgroundImageSrc="https://picsum.photos/720"
                />
                {[
                    { text: "Fun", textColor: "white", textBackgroundColor: "red", backgroundImageSrc: "https://picsum.photos/720" },
                    { text: "Technology", textColor: "white", textBackgroundColor: "blue", backgroundImageSrc: "https://picsum.photos/720" },
                    { text: "Sports", textColor: "white", textBackgroundColor: "green", backgroundImageSrc: "https://picsum.photos/720" },
                    { text: "Arts", textColor: "white", textBackgroundColor: "gray", backgroundImageSrc: "https://picsum.photos/720" },
                    { text: "Lifestyle", textColor: "white", textBackgroundColor: "blue", backgroundImageSrc: "https://picsum.photos/720" },
                    { text: "Animal", textColor: "white", textBackgroundColor: "indigo", backgroundImageSrc: "https://picsum.photos/720" },
                    { text: "Education", textColor: "white", textBackgroundColor: "purple", backgroundImageSrc: "https://picsum.photos/720" },
                    { text: "Entertainment", textColor: "black", textBackgroundColor: "yellow", backgroundImageSrc: "https://picsum.photos/720" },
                    { text: "Places", textColor: "black", textBackgroundColor: "gray", backgroundImageSrc: "https://picsum.photos/720" },
                    { text: "Food", textColor: "black", textBackgroundColor: "yellow", backgroundImageSrc: "https://picsum.photos/720" },
                    { text: "Science", textColor: "black", textBackgroundColor: "yellow", backgroundImageSrc: "https://picsum.photos/720" },

                ].map((i, idx) => (

                    <OkCategoryPreviewButton text={i.text} textColor={i.textColor} textBackgroundColor={i.textBackgroundColor} backgroundImageSrc={i.backgroundImageSrc} />
                ))}
            </View>
            <OkMobileCommunitiesCategory />
            <OkMobileCommunitiesYouCategory />
        </View>
    )
}

