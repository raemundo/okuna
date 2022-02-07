import React from 'react'
import { View, Text } from 'react-native'
import twi, { tw } from "~/lib/tailwind";
import Skeleton from 'native-headless-ui/src/components/Skeleton';

export default function OkNotificationSkeleton() {
    return (
        <>
            <View style={tw`flex-row items-center mt-1`}>
                <Skeleton variant="circular" width={50} height={50} />
                <Skeleton width={320} style={tw`mx-2`} />
            </View>
            <View style={tw`flex-row items-center mt-1`}>
                <Skeleton variant="circular" width={50} height={50} />
                <Skeleton width={220} style={tw`mx-2`} />
            </View>
            <View style={tw`flex-row items-center mt-1`}>
                <Skeleton variant="circular" width={50} height={50} />
                <Skeleton width={320} style={tw`mx-2`} />
            </View>
        </>
    )
}
