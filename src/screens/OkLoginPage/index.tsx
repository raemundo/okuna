import React from "react";
import { View, Text, TextInput } from "react-native";
import { tw } from "~/lib/tailwind"
import OkLogo from "~/components/OkLogo";
import OkLoginForm from "~/components/forms/OkLoginForm";
const t = (txt) => txt;
function OkLoginPage() {
    return (
        <View style={tw`bg-white border border-gray-100 rounded-lg w-1/2`}>
            <View>
                <OkLogo />
            </View>
            <View style={tw`p-2 border border-gray-100 `}>
                <OkLoginForm />
            </View>
            <Text style={tw`text-center text-gray-600 text-lg px-6`}>{t('common:name')}  {t(`language:Arabic`)}</Text>
        </View>
    )
}

export default OkLoginPage;
