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
        <View style={tw`w-11/12 mx-auto`}>
            <View style={tw`flex-row flex-wrap mb-52`}>
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
            <OkDesktopCommunitiesCategory />
        </View>
    )
}
