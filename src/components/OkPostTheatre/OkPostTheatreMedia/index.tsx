import React from 'react'
import { View, Text } from 'react-native'
import twi, { tw } from "~/lib/tailwind";
import OkPostTheatreMediaImage from '~/components/OkPostTheatre/OkPostTheatreMedia/components/OkPostTheatreMediaImage';
import OkPostTheatreMediaVideo from '~/components/OkPostTheatre/OkPostTheatreMedia/components/OkPostTheatreMediaVideo';

export default function OkPostTheatreMedia() {
    return (
        <>
            {true ? <OkPostTheatreMediaImage /> : <OkPostTheatreMediaVideo /> }
        </>
    )
}
