import React from 'react'
import { View, Text } from 'react-native'
import twi, { tw } from "~/lib/tailwind";
import OkPost from "~/components/OkPost";
import OkPostComments from "~/components/OkPostTheatre/OkPostTheatreSidebar/components/OkPostComments";
import OkPostCommenter from "~/components/OkPostTheatre/OkPostTheatreSidebar/components/OkPostCommenter";

export default function OkMobilePostPage() {
    return (
        <>
            <OkPost/>
            <OkPostComments/>
            <OkPostCommenter/>
        </>
    )
}
