import React from 'react'
import { View, Text } from 'react-native'
import twi, { tw } from "~/lib/tailwind";
import OkAuthPage from "~/layouts/OkAuthPage";
import Card from 'native-headless-ui/src/components/Card';
import OkLogo from '~/components/OkLogo';
import OkRequestPasswordResetForm from '~/components/forms/OkRequestPasswordResetForm';
import OkResetPasswordForm from '~/components/forms/OkResetPasswordForm';

export default function OkResetPasswordPage() {
    return (
        <OkAuthPage>
            <Card style={tw`rounded-lg md:w-1/2 p-2`}>
                <OkLogo style={tw`justify-center`} />
                <OkResetPasswordForm />
            </Card>
        </OkAuthPage>
    )
}
