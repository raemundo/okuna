import React from 'react'
import { View, Image } from 'react-native'
import twi, { tw } from "~/lib/tailwind";

import OkPostMediaImage from "~/components/OkPost/components/OkPostMedia/components/OkPostMediaImage";
import OkPostMediaVideo from "~/components/OkPost/components/OkPostMedia/components/OkPostMediaVideo";
import OkFittedImg from '~/components/images/OkContainedImage';
import OkPostMediaCroppedIcon from '~/components/OkPost/components/OkPostMedia/components/OkPostMediaCroppedIcon';

export default function OkPostMedia() {
    return (
        <View style={tw`w-full h-76 max-h-80`}>
            <Image
                source={{ uri: 'https://picsum.photos/1080/1920' }}
                style={tw`w-full h-76 max-h-80`}
            />
        </View>
    )
}
