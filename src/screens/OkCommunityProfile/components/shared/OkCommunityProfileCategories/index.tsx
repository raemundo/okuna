import React from 'react'
import { View, Text } from 'react-native'
import twi, { tw } from "~/lib/tailwind";
import OkCategoryButton from "~/components/buttons/OkCategoryButton"

export default function OkCommunityProfileCategories() {
    return (
        <View style={tw`flex-row`}>
            <OkCategoryButton color="yellow">food</OkCategoryButton>
            <OkCategoryButton color="green">photos</OkCategoryButton>
        </View >
    )
}
