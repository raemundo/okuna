import React from 'react'
import { View, Text } from 'react-native'
import twi, { tw } from "~/lib/tailwind";
import OkAuthPage from "~/layouts/OkAuthPage";
import Card from '~/component-lib/Card';
import OkLogo from "~/components/OkLogo";
import OkRequestPasswordResetForm from "~/components/forms/OkRequestPasswordResetForm";

export default function OkRequestPasswordResetPage() {
    return (
        <OkAuthPage>
            <Card style={tw`rounded-lg md:w-1/2`}>
                <OkLogo style={tw`justify-center`} />
                <OkRequestPasswordResetForm />
            </Card>
        </OkAuthPage>
    )
}
