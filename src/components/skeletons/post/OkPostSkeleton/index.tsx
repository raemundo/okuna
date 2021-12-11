import React from 'react'
import { View, Text } from 'react-native'
import twi, { tw } from "~/lib/tailwind";
import Card from "~/component-lib/Card"
import Skeleton from "~/component-lib/Skeleton"

export default function OkPostSkeleton() {
    return (
        <Card style={tw`rounded-lg justify-between h-64 p-2`}>
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
