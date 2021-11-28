import React from "react";
import { View, Text, TextInput } from "react-native";
import { tw } from "~/lib/tailwind"
import OkLogo from "~/components/OkLogo";
import OkLoginForm from "~/components/forms/OkLoginForm";
const t = (txt) => txt;
function OkLoginPage() {
    return (
        <View style={tw`w-full bg-white border border-gray-100 rounded-lg md:w-1/2`}>
            <OkLogo style={tw`justify-center`} />
            <View style={tw`p-2 border border-gray-100`}>
                <OkLoginForm />
            </View>
            <Text style={tw`px-6 text-lg text-center text-gray-600`}>{t('common:name')}</Text>
        </View>
    )
}

export default OkLoginPage;
