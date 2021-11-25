import React from 'react'
import { View, Text } from 'react-native'
import twi, { tw } from "~/lib/tailwind";

import OkHttpList from '~/components/OkHttpList';
import OkPostSkeleton from '~/components/skeletons/post/OkPostSkeleton';
import OkPost from "~/components/OkPost";

export default function OkPostsStream({ leading }) {
    return (
        <>
            {leading}
            <OkHttpList>
                <OkPost />
            </OkHttpList>
        </>
    )
}
