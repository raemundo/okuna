import React from 'react'
import { View, Text } from 'react-native'
import twi, { tw } from "~/lib/tailwind";

import OkLoadingIndicator from "~/components/utils/OkLoadingIndicator";
import OkPostSkeleton from "~/components/skeletons/post/OkPostSkeleton";
import OkCommunityCardSkeleton from "~/components/skeletons/cards/OkCommunityCardSkeleton";
import OkCommunityTileSkeleton from "~/components/skeletons/tiles/OkCommunityTileSkeleton";
import OkNotificationSkeleton from "~/components/skeletons/notification/OkNotificationSkeleton";

export default function OkHttpList({ listType, children }) {
    return (
        <>
            {listType === "post" && (<>{children}<OkPostSkeleton /></>)}
            {listType === "notification" && (<>{children}<OkNotificationSkeleton /></>)}
            {listType === "community" && (<>{children}<OkCommunityCardSkeleton /></>)}
            {listType === "community-mobile" && (<>{children}<OkCommunityTileSkeleton /></>)}
        </>
    )
}
