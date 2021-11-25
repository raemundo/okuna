import React from 'react'
import { View, Text } from 'react-native'
import twi, { tw } from "~/lib/tailwind";
import OkPostsStream from "../OkPostsStream";
import OkCommunityPostUploads from '~/components/posts-stream/OkCommunityPostsStream/components/OkCommunityPostUploads';

export default function OkCommunityPostsStream() {
    return (
        <OkPostsStream
            leading={<OkCommunityPostUploads />}
        />
    )
}
