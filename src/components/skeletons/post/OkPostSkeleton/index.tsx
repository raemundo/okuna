import React from 'react'
import { View, Text } from 'react-native'
import twi, { tw } from "~/lib/tailwind";
import { Card, Skeleton } from "native-headless-ui"

export default function OkPostSkeleton() {
    return (
        <Card style={tw`justify-between h-64 p-2 md:rounded-lg`}>
            <View style={tw`flex-row items-center`}>
                <Skeleton variant="circular" width={50} height={50} />
                <View style={tw`mx-2`}>
                    <Skeleton width={100} />
                    <Skeleton width={120} style={tw`mt-2`} />
                </View>
            </View>
            <View style={tw`flex-row justify-between`}>
                <Skeleton />
                <Skeleton />
                <Skeleton />
            </View>
        </Card>
    )
}
