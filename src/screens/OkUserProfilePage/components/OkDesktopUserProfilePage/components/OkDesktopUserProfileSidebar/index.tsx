import React from 'react'
import { View, Text } from 'react-native'
import twi, { tw } from "~/lib/tailwind";
import Card from '~/component-lib/Card';

// import OkDesktopUserProfileSidebarDetails
// from "~/pages/home/pages/user/components/desktop-user-profile/components/desktop-user-profile-sidebar/components/OkDesktopUserProfileSidebarDetails.vue";
// import OkDesktopUserProfileSidebarActions
// from '~/pages/home/pages/user/components/desktop-user-profile/components/desktop-user-profile-sidebar/components/OkDesktopUserProfileSidebarActions.vue';

import OkSmartText from '~/components/smart-text/OkSmartText';
import OkUserProfileLocation from '~/screens/OkUserProfilePage/components/shared/OkUserProfileLocation';
import OkUserProfileUrl from '~/screens/OkUserProfilePage/components/shared/OkUserProfileUrl';
import OkUserProfileAge from '~/screens/OkUserProfilePage/components/shared/OkUserProfileAge';
import OkUserAvatar from '~/components/avatars/OkUserAvatar';
import OkUserProfileName from '~/screens/OkUserProfilePage/components/shared/OkUserProfileName';
import OkUserProfileUsername from '~/screens/OkUserProfilePage/components/shared/OkUserProfileUsername';
import OkUserProfileActionButtons from '~/screens/OkUserProfilePage/components/shared/OkUserProfileActionButtons';
import { useTranslation } from 'react-i18next';

export default function OkDesktopUserProfileSidebar() {
    const { t } = useTranslation()
    return (
        <View style={tw`w-full md:w-2/6`}>
            <Card style={tw`rounded-lg`}
            >
                <View style={tw`m-2`}>
                    <Text style={tw`text-sm font-bold text-gray-400`}>{t('community__about')}</Text>
                </View>
                <View style={tw`p-2`}>
                    <OkSmartText text="Digital right activist building people-centric responsible, sustainable and fair technology for a more prosperous tomorrow" />
                </View>
                <View style={tw`p-2 flex-row flex-wrap justify-between`}>
                    <OkUserProfileLocation />
                    <OkUserProfileUrl />
                    <OkUserProfileAge />
                </View>
            </Card>
        </View>
    )
}
