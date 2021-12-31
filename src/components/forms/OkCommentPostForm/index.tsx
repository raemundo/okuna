import React from 'react'
import { TextInput } from 'react-native'
import twi, { tw } from "~/lib/tailwind";

export default function OkCommentPostForm() {
    return (
        <TextInput style={tw`bg-gray-200 border border-gray-300 dark:border-gray-800 dark:text-white rounded-lg flex-1`} />
    )
}
