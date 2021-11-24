import React from 'react'
import { View, Text, Image, TextInput, Pressable } from 'react-native'
import FontAwesomeIcon from "~/components/FontAwesomeIcon";
import { faBell, faCircleNotch, faGlobeAmericas, faHome, faPlus, faSortDown, faUsers } from "@fortawesome/free-solid-svg-icons";
import Link from "next-rn/link";
import twi, { tw } from "~/lib/tailwind"
import OkLogo from "~/components/OkLogo"
import OkHeaderSearchBar from './components/OkHeaderSearchBar';
import { faFacebookMessenger } from '@fortawesome/free-brands-svg-icons';
export default function Header() {
    return (
        <View style={tw`flex-row justify-between items-center border-b-2 border-gray-100  h-12`}>
            <View style={tw`flex-row justify-start`}>
                <OkLogo />
                <OkHeaderSearchBar />
            </View>
            <View style={tw``}>
                <View style={tw`flex-row`}>
                    <Link style={tw`m-6`} routeName="home" web={{ path: "/" }} isText={false}>
                        <FontAwesomeIcon style={twi`text-2xl text-gray-400`} icon={faHome} />
                    </Link>
                    <Link style={tw`m-6`} routeName="now" web={{ path: "/now" }} isText={false}>
                        <FontAwesomeIcon style={twi`text-2xl text-gray-400`} icon={faGlobeAmericas} />
                    </Link>
                    <Link style={tw`m-6`} routeName="community" web={{ path: "/c" }} isText={false}>
                        <FontAwesomeIcon style={twi`text-2xl text-gray-400`} icon={faUsers} />
                    </Link>
                    {/* <Link style={tw`m-6`} routeName="notifications" web={{ path: "/n" }} isText={false}>
                        <FontAwesomeIcon style={twi`text-2xl text-gray-400`} icon={faBell} />
                    </Link> */}
                </View>
            </View>
            <View style={tw`flex-row justify-end`}>
                <Pressable style={(state) => [tw`mx-1 p-1 rounded-full items-center justify-center flex-row`, state.hovered && tw`bg-gray-300`]}>
                    <Image source={{ uri: 'https://picsum.photos/200' }} style={tw`w-8 h-8 rounded-full`} />
                    <Text style={tw`hidden md:flex font-semibold text-sm`}>Saiful</Text>
                </Pressable >
                <View style={tw`hidden md:flex flex-row`}>
                    <Pressable style={(state) => [tw`mx-1 w-10 h-10 bg-gray-200 rounded-full items-center justify-center`, state.hovered && tw`bg-gray-300`]}>
                        <FontAwesomeIcon icon={faPlus} />
                    </Pressable>
                    <Pressable style={(state) => [tw`mx-1 w-10 h-10 bg-gray-200 rounded-full items-center justify-center`, state.hovered && tw`bg-gray-300`]}>
                        <FontAwesomeIcon icon={faFacebookMessenger} />
                    </Pressable>
                    <Pressable style={(state) => [tw`mx-1 w-10 h-10 bg-gray-200 rounded-full items-center justify-center`, state.hovered && tw`bg-gray-300`]}>
                        <FontAwesomeIcon icon={faBell} />
                    </Pressable>
                    <Pressable style={(state) => [tw`mx-1 w-10 h-10 bg-gray-200 rounded-full items-center justify-center`, state.hovered && tw`bg-gray-300`]}>
                        <FontAwesomeIcon icon={faSortDown} />
                    </Pressable>
                </View>
            </View>
        </View>
    )
}
