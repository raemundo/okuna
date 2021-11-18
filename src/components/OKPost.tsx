import { View, Text, Image, Pressable } from 'react-native'
import FontAwesomeIcon from "~/components/FontAwesomeIcon";
import { faComment, faEllipsisV, faHeart, faSmile, faSurprise, faThumbsUp, } from "@fortawesome/free-solid-svg-icons";
import tw, { t } from "~/lib/tailwind"

export default function OKPost() {
    return (
        <View style={t`w-full shadow border border-gray-300 h-auto bg-white my-2 rounded-md`}>
            <View style={t`flex-row items-center p-3 px-4`}>
                <View style={t`w-10 h-10 mx-2`}>
                    <Image
                        source={{ uri: "https://picsum.photos/200" }}
                        style={t`w-full h-full rounded-lg`}
                    />
                </View>
                <View style={t`flex-grow flex flex-col`}>
                    <View style={t`text-gray-500 font-semibold`}>
                        <Text>Saiful Islam</Text>
                    </View>
                    <View style={t`flex-row`}>
                        <Text style={t`text-xs text-gray-700 font-bold`}>@saiful</Text>
                        <Text style={t`text-xs text-gray-300 mx-2`}>2d</Text>
                    </View>
                </View>
                <View style={t`w-8 h-8`}>
                    <Pressable style={t`w-full h-full hover:bg-gray-100 rounded-full text-gray-800 focus:outline-none`}>
                        <FontAwesomeIcon icon={faEllipsisV} />
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
            <View style={t`w-full flex flex-col p-2 px-4`}>
                <View style={t`flex-row items-center justify-between px-3 pb-2 mb-2`}>
                    <View style={t`flex-row items-center text-gray-400 text-sm`}>
                        <Pressable style={t`bg-gray-200 py-1 px-2 mx-1 rounded-xl text-red-500`}>
                            <FontAwesomeIcon icon={faHeart} />
                        </Pressable>
                        <Pressable style={t`bg-gray-200 py-1 px-2 mx-1 rounded-xl text-blue-500`}>
                            <FontAwesomeIcon icon={faThumbsUp} />
                        </Pressable>
                        <Pressable style={t`bg-gray-200 py-1 px-2 mx-1 rounded-xl text-yellow-500`}>
                            <FontAwesomeIcon icon={faSurprise} />
                        </Pressable>
                    </View>
                </View>
                <View style={t`flex-row justify-around text-gray-400`}>
                    <Pressable style={t`flex-row justify-center items-center bg-gray-200 rounded-full p-2 w-5/12`}>
                        <FontAwesomeIcon icon={faSmile} />
                        <Text style={t`font-semibold text-sm mx-1`}>React</Text>
                    </Pressable>
                    <Pressable style={t`flex-row justify-center items-center bg-gray-200 rounded-full p-2 w-5/12`}>
                        <FontAwesomeIcon icon={faComment} />
                        <Text style={t`font-semibold text-sm mx-1`}>Comment</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    )
}
