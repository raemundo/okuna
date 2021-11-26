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
        <View style={tw`flex-row justify-between items-center border-b-2 border-gray-100 h-12 lg:px-16`}>
            <OkLogo style={tw`flex-1`} />
            <OkHeaderSearchBar />
            <View style={tw`flex-2 lg:flex-1 flex-row justify-between items-center px-2`}>
                <Pressable style={(state) => [tw`flex lg:hidden w-10 h-10 bg-gray-200 rounded-full items-center justify-center`, state.hovered && tw`bg-gray-300`]}>
                    <FontAwesomeIcon style={twi`text-gray-500`} icon={faSearch} />
                </Pressable>
                <Link routeName="home" web={{ path: "/" }} isText={false}>
                    <FontAwesomeIcon style={twi`text-2xl text-black`} icon={faHome} />
                </Link>
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
                    tw`rounded-full items-center justify-between flex-row py-1 px-2 bg-gray-200`,
                    state.hovered && tw`bg-gray-300`
                ]}>
                    <Image source={{ uri: 'https://picsum.photos/200' }} style={tw`w-6 h-6 rounded-full`} />
                    <Text style={tw`hidden md:flex font-semibold text-sm mx-4`}>Saiful</Text>
                    <FontAwesomeIcon icon={faSortDown} />
                </Pressable >
            </View>
        </View>
    )
}
