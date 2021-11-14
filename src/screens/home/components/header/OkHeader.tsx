import React from 'react'
import { View, Text, Image, TextInput } from 'react-native'
import FontAwesomeIcon from "~/components/FontAwesomeIcon";
import { faBell, faCircleNotch, faGlobeAmericas, faHome, faUsers } from "@fortawesome/free-solid-svg-icons";
import Link from "next-rn/link";
import { t } from "~/lib/tailwind"
import OkLogo from "~/components/okuna-logo/OkLogo"
import OkHeaderSearchBar from './components/OkHeaderSearchBar';
export default function Header() {
    return (
        <View style={t`flex-row justify-between items-center border-b-2 border-gray-100 h-12`}>
            <OkLogo />
            <OkHeaderSearchBar />
            <View style={t`flex-row`}>
                <Link style={t`m-6`} routeName="home" web={{ path: "/" }} isText={false}><FontAwesomeIcon icon={faHome} /></Link>
                <Link style={t`m-6`} routeName="now" web={{ path: "/now" }} isText={false}><FontAwesomeIcon icon={faGlobeAmericas} /></Link>
                <Link style={t`m-6`} routeName="community" web={{ path: "/c" }} isText={false}><FontAwesomeIcon icon={faUsers} /></Link>
                <Link style={t`m-6`} routeName="notifications" web={{ path: "/n" }} isText={false}><FontAwesomeIcon icon={faBell} /></Link>
            </View>
        </View>
    )
}
