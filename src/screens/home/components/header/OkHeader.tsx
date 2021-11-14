import React from 'react'
import { View, Text, Image, TextInput, Pressable } from 'react-native'
import FontAwesomeIcon from "~/components/FontAwesomeIcon";
import { faBell, faCircleNotch, faGlobeAmericas, faHome, faPlus, faSortDown, faUsers } from "@fortawesome/free-solid-svg-icons";
import Link from "next-rn/link";
import tw, { t } from "~/lib/tailwind"
import OkLogo from "~/components/okuna-logo/OkLogo"
import OkHeaderSearchBar from './components/OkHeaderSearchBar';
import { faFacebookMessenger } from '@fortawesome/free-brands-svg-icons';
export default function Header() {
    return (
        <View style={t`flex-row justify-between items-center border-b-2 border-gray-100  h-12`}>
            <View style={t`flex-row justify-start`}>
                <OkLogo />
                <OkHeaderSearchBar />
            </View>
            <View style={t``}>
                <View style={t`flex-row`}>
                    <Link style={t`m-6`} routeName="home" web={{ path: "/" }} isText={false}>
                        <FontAwesomeIcon style={tw`text-2xl text-gray-400`} icon={faHome} />
                    </Link>
                    <Link style={t`m-6`} routeName="now" web={{ path: "/now" }} isText={false}>
                        <FontAwesomeIcon style={tw`text-2xl text-gray-400`} icon={faGlobeAmericas} />
                    </Link>
                    <Link style={t`m-6`} routeName="community" web={{ path: "/c" }} isText={false}>
                        <FontAwesomeIcon style={tw`text-2xl text-gray-400`} icon={faUsers} />
                    </Link>
                    {/* <Link style={t`m-6`} routeName="notifications" web={{ path: "/n" }} isText={false}>
                        <FontAwesomeIcon style={tw`text-2xl text-gray-400`} icon={faBell} />
                    </Link> */}
                </View>
            </View>
            <View style={t`flex-row justify-end`}>
                <Pressable style={(state) => [t`mx-1 p-1 rounded-full items-center justify-center flex-row`, state.hovered && t`bg-gray-300`]}>
                    <Image source={{ uri: 'https://picsum.photos/200' }} style={t`w-8 h-8 rounded-full`} />
                    <Text style={t`hidden md:flex font-semibold text-sm`}>Saiful</Text>
                </Pressable >
                <View style={t`hidden md:flex flex-row`}>
                    <Pressable style={(state) => [t`mx-1 w-10 h-10 bg-gray-200 rounded-full items-center justify-center`, state.hovered && t`bg-gray-300`]}>
                        <FontAwesomeIcon icon={faPlus} />
                    </Pressable>
                    <Pressable style={(state) => [t`mx-1 w-10 h-10 bg-gray-200 rounded-full items-center justify-center`, state.hovered && t`bg-gray-300`]}>
                        <FontAwesomeIcon icon={faFacebookMessenger} />
                    </Pressable>
                    <Pressable style={(state) => [t`mx-1 w-10 h-10 bg-gray-200 rounded-full items-center justify-center`, state.hovered && t`bg-gray-300`]}>
                        <FontAwesomeIcon icon={faBell} />
                    </Pressable>
                    <Pressable style={(state) => [t`mx-1 w-10 h-10 bg-gray-200 rounded-full items-center justify-center`, state.hovered && t`bg-gray-300`]}>
                        <FontAwesomeIcon icon={faSortDown} />
                    </Pressable>
                </View>
            </View>
        </View>
    )
}
