import React from 'react'
import { View, Text, ImageBackground } from 'react-native'
import twi, { tw } from "~/lib/tailwind";
import OkFatButton from '~/components/buttons/OkFatButton';

export default function OkCategoryPreviewButton({ text, textColor, backgroundImageSrc, textBackgroundColor }) {
    return (
        <OkFatButton
            backgroundImageSrc={backgroundImageSrc}
            textBackgroundColor={textBackgroundColor}
            textColor={textColor}
            text={text}
        />
    )
}
