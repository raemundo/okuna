import React from "react";
import { View, Text, TextInput } from "react-native";
import { tw } from "~/lib/tailwind"
import OkLogo from "~/components/OkLogo";
import OkLoginForm from "~/components/forms/OkLoginForm";
import OkAuthPage from "~/layouts/OkAuthPage";
import Card from "native-headless-ui/src/components/Card"
import { useTranslation } from "react-i18next";

function OkLoginPage() {
    const { t } = useTranslation();
    return (
        <OkAuthPage>
            <Card style={tw`rounded-lg md:w-1/2`}>
                <OkLogo style={tw`justify-center`} />
                <View style={tw`p-2 dark:border-0 border border-gray-100`}>
                    <OkLoginForm />
                </View>
                <Text style={tw`px-6 text-lg text-center text-gray-600`}>{t('auth__create_acc__create_account')}</Text>
            </Card>
        </OkAuthPage>
    )
}

export default OkLoginPage;
