import React from 'react'
import { View, Text, Image, TextInput, Pressable } from 'react-native'
import FontAwesomeIcon from "~/component-lib/FontAwesomeIcon";
import { faBell, faGlobeAmericas, faHome, faSearch, faSortDown, faUsers } from "@fortawesome/free-solid-svg-icons";
import Link from "next-rn/link";
import twi, { tw } from "~/lib/tailwind"
import OkLogo from "~/components/OkLogo"
import OkHeaderSearchBar from './components/OkHeaderSearchBar';

export default function OkHeader() {
    return (
        <View style={tw`flex-row items-center justify-between h-12 border-b-2 border-gray-100 lg:px-16`}>
            <OkLogo style={tw`flex-1`} />
            <OkHeaderSearchBar />
            <View style={tw`flex-row items-center justify-between px-2 flex-8 lg:flex-1`}>
                <Link routeName="home" web={{ path: "/" }} isText={false}>
                    <FontAwesomeIcon style={twi`text-2xl text-black`} icon={faHome} />
                </Link>
                <Pressable style={(state) => [tw`flex items-center justify-center w-10 h-10 rounded-full lg:hidden`, state.hovered && tw`bg-gray-300`]}>
                    <FontAwesomeIcon style={twi`text-2xl text-black`} icon={faSearch} />
                </Pressable>
                <Link routeName="now" web={{ path: "/now" }} isText={false}>
                    <FontAwesomeIcon style={twi`text-2xl text-black`} icon={faGlobeAmericas} />
                </Link>
                <Link routeName="community" web={{ path: "/c" }} isText={false}>
                    <FontAwesomeIcon style={twi`text-2xl text-black`} icon={faUsers} />
                </Link>
                <Link routeName="notifications" web={{ path: "/n" }} isText={false}>
                    <FontAwesomeIcon style={twi`text-2xl text-black`} icon={faBell} />
                </Link>
                <Pressable style={(state) => [
                    tw`flex-row items-center justify-between px-2 py-1 bg-gray-200 rounded-full`,
                    state.hovered && tw`bg-gray-300`
                ]}>
                    <Image source={{ uri: 'https://picsum.photos/200' }} style={tw`w-6 h-6 rounded-full`} />
                    <Text style={tw`hidden mx-4 text-sm font-semibold md:flex`}>Saiful</Text>
                    <FontAwesomeIcon icon={faSortDown} />
                </Pressable >
            </View>
        </View>
    )
}
