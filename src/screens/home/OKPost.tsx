import { View, Text, Image, Pressable } from 'react-native'
import FontAwesomeIcon from "~/components/FontAwesomeIcon";
import { faEllipsisH, faHeart, faImages, faSmile, faSurprise, faThumbsUp, } from "@fortawesome/free-solid-svg-icons";
import tw, { t } from "~/lib/tailwind"
import { faYoutube } from '@fortawesome/free-brands-svg-icons';

export default function OKPost() {
    return (
        <View style={t`w-full shadow border border-gray-300 h-auto bg-white my-2 rounded-md`}>
            <View style={t`flex-row items-center space-x-2 p-3 px-4`}>
                <View style={t`w-10 h-10`}>
                    <Image
                        source={{ uri: "https://picsum.photos/200" }}
                        style={t`w-full h-full rounded-full`}
                    />
                </View>
                <View style={t`flex-grow flex flex-col`}>
                    <View style={t`text-gray-500 font-semibold`}>
                        <Text>Saiful Islam</Text>
                    </View>
                    <Text style={t`text-xs text-gray-300`}>2d</Text>
                </View>
                <View style={t`w-8 h-8`}>
                    <Pressable style={t`w-full h-full hover:bg-gray-100 rounded-full text-gray-400 focus:outline-none`}>
                        <FontAwesomeIcon icon={faEllipsisH} />
                    </Pressable>
                </View>
            </View>
            <View style={t`text-gray-500 px-3`}>This is caption</View>
            <View style={t`w-full h-76 max-h-80`}>
                <Image
                    source={{ uri: 'https://picsum.photos/1080/1920' }}
                    style={t`w-full h-76 max-h-80`}
                />
            </View>
            <View style={t`w-full flex flex-col space-y-2 p-2 px-4`}>
                <View style={t`flex-row items-center justify-between px-3 pb-2 mb-2 border-b`}>
                    <View style={t`flex items-center`}>
                        <View style={t`flex-row items-center text-gray-400 text-sm`}>
                            <Pressable style={t`focus:outline-none flex items-center justify-center w-4 h-4 rounded-full bg-red-500 text-white`}>
                                {/* <i style={{ fontSize: 10 }} style={t`fas fa-heart`}></i> */}
                                <FontAwesomeIcon icon={faHeart} />

                            </Pressable>
                            <Pressable style={t`focus:outline-none flex items-center justify-center w-4 h-4 rounded-full bg-blue-500 text-white`}>
                                <FontAwesomeIcon icon={faThumbsUp} />
                                {/* <i style={{ fontSize: 10 }} style={t`fas fa-thumbs-up`}></i> */}
                            </Pressable>
                            <Pressable style={t`focus:outline-none flex items-center justify-center w-4 h-4 rounded-full bg-yellow-500 text-white`}>
                                <FontAwesomeIcon icon={faSurprise} />
                                {/* <i style={{ fontSize: 10 }} style={t`fas fa-surprise`}></i> */}
                            </Pressable>
                            <View style={t`ml-1`}>
                                <Text>130K</Text>
                            </View>
                        </View>
                    </View>
                    <View>
                        <Text style={t`text-gray-400 text-sm`}>9 Shares</Text>
                    </View>
                </View>
                <View style={t`flex-row space-x-3 text-gray-400`}>
                    <Pressable style={t`flex-1 flex items-center h-8 focus:outline-none focus:bg-gray-200 justify-center space-x-2 hover:bg-gray-100 rounded-md`}>
                        <View>
                            {/* <i style={t`fas fa-thumbs-up`}></i> */}
                        </View>
                        <View>
                            <Text style={t`font-semibold text-sm`}>Like</Text>
                        </View>
                    </Pressable>
                    <Pressable style={t`flex-1 flex items-center h-8 focus:outline-none focus:bg-gray-200 justify-center space-x-2 hover:bg-gray-100 rounded-md`}>
                        <View>
                            {/* <i style={t`fas fa-comment`}></i> */}
                        </View>
                        <View>
                            <Text style={t`font-semibold text-sm`}>Comment</Text>
                        </View>
                    </Pressable>
                    <Pressable style={t`flex-1 flex items-center h-8 focus:outline-none focus:bg-gray-200 justify-center space-x-2 hover:bg-gray-100 rounded-md`}>
                        <View>
                            {/* <i style={t`fas fa-share`}></i> */}
                        </View>
                        <View>
                            <Text style={t`font-semibold text-sm`}>Share</Text>
                        </View>
                    </Pressable>
                </View>
            </View>
        </View>
    )
}
