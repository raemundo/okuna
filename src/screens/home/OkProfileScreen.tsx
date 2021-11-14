import React from 'react';
import CreatePostBox from './OKCreatePostBox';
import OKPost from './OKPost';
import OKHeader from "./components/header/OkHeader";
import OKCreatePostBox from "./OKCreatePostBox";
import { View, Text, Image, TextInput, Pressable, ImageBackground } from 'react-native'
import tw, { t } from "~/lib/tailwind"
import FontAwesomeIcon from '@/src/components/FontAwesomeIcon';
import { faBars, faCamera, faCog, faEllipsisH, faPen, faPlus, faSlidersH, faThLarge } from '@fortawesome/free-solid-svg-icons';

const ProfileScreen = () => {
    return (
        <View style={t`w-9/12 mx-auto mt-6 h-full `}>
            <View style={t`w-full h-auto shadow border border-gray-300 bg-white rounded-lg`}>
                <ImageBackground
                    source={{ uri: 'https://picsum.photos/720' }}
                    style={[t`h-96 w-full`, {borderRadius: 20}]}
                >
                    <View
                        style={t`absolute w-full flex items-center justify-center bottom-[-15px]`}
                    >
                        <View style={t`w-44 h-44 rounded-full bg-gray-300 border-4 border-white`}>
                            <Image
                                style={t`w-full h-full rounded-full`}
                                source={{ uri: "https://picsum.photos/200" }}
                            />
                        </View>
                        <View style={t`absolute bottom-[30px] right-[30px]`}>
                            <Pressable style={t`focus:outline-none flex-row px-3 py-2 hover:bg-gray-50 font-semibold bg-white rounded-md`}>
                                <FontAwesomeIcon icon={faCamera} />
                                Edit Cover Photo
                            </Pressable>
                        </View>
                    </View>
                </ImageBackground >
                <View style={t`h-full mx-auto w-9/12 px-2`}>
                    <View style={t`flex flex-col space-y-2 mt-3 items-center justify-center pb-3 border-b-2`}>
                        <Text style={t`text-4xl font-bold`}>Saiful Islam Shihab</Text>
                        <Text style={t`text-sm text-gray-500`}>I am Software Engineer</Text>
                    </View>
                    <View style={t`mt-1 flex-row items-center justify-between`}>
                        <View style={t`flex-row mb-2 items-center space-x-2`}>
                            <Pressable style={t`py-3 px-2 hover:bg-gray-100 rounded-md font-semibold focus:outline-none`}>
                                Posts
                            </Pressable>
                            <Pressable style={t`py-3 px-2 hover:bg-gray-100 rounded-md font-semibold focus:outline-none`}>
                                About
                            </Pressable>
                            <Pressable style={t`py-3 px-2 hover:bg-gray-100 rounded-md font-semibold focus:outline-none`}>
                                Friends
                            </Pressable>
                            <Pressable style={t`py-3 px-2 hover:bg-gray-100 rounded-md font-semibold focus:outline-none`}>
                                Photos
                            </Pressable>
                            <Pressable style={t`py-3 px-2 hover:bg-gray-100 rounded-md font-semibold focus:outline-none`}>
                                Story Archrive
                            </Pressable>
                            <Pressable style={t`py-3 px-2 hover:bg-gray-100 rounded-md font-semibold focus:outline-none`}>
                                Videos
                            </Pressable>
                        </View>
                        <View style={t`flex-row items-center space-x-2`}>
                            <Pressable style={t`px-3 py-1.5 rounded-md flex-row  bg-blue-500 hover:bg-blue-600 text-white font-semibold focus:outline-none`}>
                                <FontAwesomeIcon icon={faPlus} />
                                Add to Story
                            </Pressable>
                            <Pressable style={t`px-3 py-1.5 bg-gray-200 flex-row hover:bg-gray-300 rounded-md font-semibold focus:outline-none`}>
                                <FontAwesomeIcon icon={faPen} />
                                Edit Profile
                            </Pressable>
                            <Pressable style={t`px-3 py-1.5 flex-row rounded-md bg-gray-100 hover:bg-gray-200 font-semibold focus:outline-none`}>
                                <FontAwesomeIcon icon={faEllipsisH} />
                            </Pressable>
                        </View>
                    </View>
                </View>
            </View>

            {/* After bio content */}
            <View style={t`h-full mt-2`}>
                <View style={t`flex-row flex-wrap`}>
                    <View style={t`w-full md:w-2/6 px-2`}>
                        <View style={t`bg-white rounded-lg p-3 text-sm text-gray-600 shadow border border-gray-300`}>
                            <View style={t`mb-2 `}>
                                <Text style={t`font-bold text-xl text-gray-800`}>Intro</Text>
                            </View>
                            <View style={t`flex flex-col space-y-3`}>
                                <View style={t`flex items-center space-x-2`}>
                                    <Text>
                                        {/* <i style={t`fas fa-briefcase`}></i> */}
                                    </Text>
                                    <Text>
                                        Full Stack Web Developer at{' '}
                                        <Text style={t`font-semibold`}>Fiverr</Text>
                                    </Text>
                                </View>
                                <View style={t`flex items-center space-x-2`}>
                                    <Text>
                                        {/* <i style={t`fas fa-graduation-cap`}></i> */}
                                    </Text>
                                    <Text>
                                        Studiend B.Sc in SWE at{' '}
                                        <Text style={t`font-semibold`}>
                                            Daffodil International University
                                        </Text>
                                    </Text>
                                </View>
                                <View style={t`flex items-center space-x-2`}>
                                    <Text>
                                        {/* <i style={t`fas fa-home`}></i> */}
                                    </Text>
                                    <Text>
                                        Lives in <Text style={t`font-semibold`}>Dhaka</Text>
                                    </Text>
                                </View>
                                <View style={t`flex items-center space-x-2`}>
                                    <Text>
                                        {/* <i style={t`fas fa-map-marker-alt`}></i> */}
                                    </Text>
                                    <Text>
                                        From{' '}
                                        <Text style={t`font-semibold`}>
                                            Chandpur, Chittagong, Bangladesh
                                        </Text>
                                    </Text>
                                </View>
                                <View style={t`flex items-center space-x-2`}>
                                    <Text>
                                        {/* <i style={t`fas fa-heart`}></i> */}
                                    </Text>
                                    <Text>
                                        <Text style={t`font-semibold`}>Single</Text>
                                    </Text>
                                </View>
                                <View style={t`flex items-center space-x-2`}>
                                    <Text>
                                        {/* <i style={t`fab fa-facebook`}></i> */}
                                    </Text>
                                    <a
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href={'https://facebook.com/saifulshihab'}
                                    >
                                        <Text>saifulshihab</Text>
                                    </a>
                                </View>
                                <View style={t`flex items-center space-x-2`}>
                                    <Text>
                                        {/* <i style={t`fab fa-instagram`}></i> */}
                                    </Text>
                                    <a
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href={'https://instagram.com/_shiha6'}
                                    >
                                        <Text>_shiha6</Text>
                                    </a>
                                </View>
                                <View style={t`flex items-center space-x-2`}>
                                    <Text>
                                        {/* <i style={t`fab fa-twitter`}></i> */}
                                    </Text>
                                    <a
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href={'https://twitter.com/ShihabSWE'}
                                    >
                                        <Text>ShihabSWE</Text>
                                    </a>
                                </View>
                                <View style={t`flex items-center space-x-2`}>
                                    <Text>
                                        {/* <i style={t`fab fa-github`}></i> */}
                                    </Text>
                                    <a
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href={'https://github.com/saifulshihab'}
                                    >
                                        <Text>saifulshihab</Text>
                                    </a>
                                </View>
                                <View style={t`flex items-center space-x-2`}>
                                    <Text>
                                        {/* <i style={t`fab fa-behance`}></i> */}
                                    </Text>
                                    <a
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href={'https://www.behance.net/saifulis1am'}
                                    >
                                        <Text>saifulis1am</Text>
                                    </a>
                                </View>
                            </View>
                        </View>
                    </View>


                    <View style={t`w-full md:w-4/6 px-2`}>
                        {/* Create post */}
                        <CreatePostBox />

                        {/* post filter box */}

                        <View style={t`bg-white rounded-md shadow border border-gray-300 p-2 mt-4 px-3`}>
                            <View style={t`flex-row items-center justify-between pb-2 border-b`}>
                                <View>
                                    <Text style={t`text-xl text-gray-700 font-bold`}>Posts</Text>
                                </View>
                                <View style={t`flex-row items-center space-x-2`}>
                                    <Pressable style={t`flex-row px-3 py-1.5 bg-gray-200 hover:bg-gray-300 rounded-md font-semibold focus:outline-none`}>
                                        <FontAwesomeIcon icon={faSlidersH} />
                                        Filters
                                    </Pressable>
                                    <Pressable style={t`flex-row px-3 py-1.5 bg-gray-200 hover:bg-gray-300 rounded-md font-semibold focus:outline-none`}>
                                        <FontAwesomeIcon icon={faCog} />
                                        Manage Posts
                                    </Pressable>
                                </View>
                            </View>
                            <View style={t`flex-row space-x-3 text-gray-500 mt-1`}>
                                <Pressable style={t`flex-row font-semibold flex-1 h-8 focus:outline-none focus:bg-gray-200 justify-center space-x-2 hover:bg-gray-100 rounded-md`}>
                                    <FontAwesomeIcon icon={faBars} />
                                    List View
                                </Pressable>
                                <Pressable style={t`flex-row font-semibold flex-1 h-8 focus:outline-none focus:bg-gray-200 justify-center space-x-2 hover:bg-gray-100 rounded-md`}>
                                    <FontAwesomeIcon icon={faThLarge} />
                                    Grid View
                                </Pressable>
                            </View>
                        </View>

                        {/* user posts */}

                        <OKPost />
                    </View>
                </View>
            </View>
        </View>
    );
};

export default ProfileScreen;