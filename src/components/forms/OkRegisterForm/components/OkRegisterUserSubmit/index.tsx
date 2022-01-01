import React from 'react'
import { View, Text } from 'react-native'
import twi, { tw } from "~/lib/tailwind";
import OkJoinCommunityButton from '~/components/buttons/OkJoinCommunityButton';
import OkCommunityTile from '~/components/tiles/OkCommunityTile';

export default function OkRegisterUserSubmit() {
    return (
        <>
            <OkCommunityTile trailing={<OkJoinCommunityButton />} />
        </>
    )
}
