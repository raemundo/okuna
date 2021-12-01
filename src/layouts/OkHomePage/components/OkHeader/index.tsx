import React from 'react'
import { View, Text, Image, TextInput, Pressable } from 'react-native'
import FontAwesomeIcon from "~/component-lib/FontAwesomeIcon";
import { faBell, faGlobeAmericas, faHome, faSearch, faSortDown, faUsers } from "@fortawesome/free-solid-svg-icons";
import Link from "next-rn/link";
import twi, { tw } from "~/lib/tailwind"
import OkLogo from "~/components/OkLogo"
import OkHeaderSearchBar from './components/OkHeaderSearchBar';


import OkUserMenuDropdown from "./components/OkUserMenuDropdown";
import OkUserNotificationsDropdown from "./components/OkUserNotificationsDropdown";
import OkMobileNotificationsIcon from './components/OkMobileNotificationsIcon';


export default function OkHeader() {
    return (
        <>
            <View style={tw`relative flex-row items-center justify-between h-12 bg-white border-b-2 border-gray-100 dark:border-gray-800 dark:bg-black lg:px-16`}>
                <OkLogo style={tw`flex-1`} />
                <OkHeaderSearchBar />
                <View style={tw`flex-row items-center justify-between px-2 flex-8 lg:flex-1`}>
                    <Link routeName="home" web={{ path: "/" }} isText={false}>
                        <FontAwesomeIcon style={twi`text-2xl text-black dark:text-white`} icon={faHome} />
                    </Link>
                    <Pressable style={(state) => [tw`flex items-center justify-center w-10 h-10 rounded-full lg:hidden`, state.hovered && tw`bg-gray-300`]}>
                        <FontAwesomeIcon style={twi`text-2xl text-black dark:text-white`} icon={faSearch} />
                    </Pressable>
                    <Link routeName="now" web={{ path: "/now" }} isText={false}>
                        <FontAwesomeIcon style={twi`text-2xl text-black dark:text-white`} icon={faGlobeAmericas} />
                    </Link>
                    <Link routeName="community" web={{ path: "/c" }} isText={false}>
                        <FontAwesomeIcon style={twi`text-2xl text-black dark:text-white`} icon={faUsers} />
                    </Link>
                    <Link routeName="notifications" web={{ path: "/n" }} isText={false}>
                        <FontAwesomeIcon style={twi`text-2xl text-black dark:text-white`} icon={faBell} />
                    </Link>
                    <OkUserMenuDropdown />
                </View>
            </View>
            <OkUserNotificationsDropdown />
        </>
    )
}
