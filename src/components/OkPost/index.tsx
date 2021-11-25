import { View, Text, Image, Pressable } from 'react-native'
import FontAwesomeIcon from "~/components/FontAwesomeIcon";
import { faComment, faEllipsisV, faSmile } from "@fortawesome/free-solid-svg-icons";
import twi, { tw } from "~/lib/tailwind"

import OkPostHeader from "~/components/OkPost/components/OkPostHeader";
import OkPostText from "~/components/OkPost/components/OkPostText";
import OkPostMedia from "~/components/OkPost/components/OkPostMedia";
import OkPostLinkPreview from "~/components/OkPost/components/OkPostLinkPreview";
import OkPostReactions from "~/components/OkPost/components/OkPostReactions";
import OkPostCommentCounts from "~/components/OkPost/components/OkPostCommentCounts";
import OkPostActions from "~/components/OkPost/components/OkPostActions";
import OkPostCircles from '~/components/OkPost/components/OkPostCircles';

export default function OKPost() {
    return (
        <View style={tw`w-full shadow border border-gray-300 h-auto bg-white my-2 rounded-md`}>
            <View style={tw`flex-row items-center p-3 px-4`}>
                <View style={tw`w-10 h-10 mx-2`}>
                    <Image
                        source={{ uri: "https://picsum.photos/200" }}
                        style={tw`w-full h-full rounded-lg`}
                    />
                </View>
                <View style={tw`flex-grow flex flex-col`}>
                    <View style={tw`text-gray-500 font-semibold`}>
                        <Text>Saiful Islam</Text>
                    </View>
                    <View style={tw`flex-row`}>
                        <Text style={tw`text-xs text-gray-700 font-bold`}>@saiful</Text>
                        <Text style={tw`text-xs text-gray-300 mx-2`}>2d</Text>
                    </View>
                </View>
                <View style={tw`w-8 h-8`}>
                    <Pressable style={tw`w-full h-full hover:bg-gray-100 rounded-full text-gray-800 focus:outline-none`}>
                        <FontAwesomeIcon icon={faEllipsisV} />
                    </Pressable>
                </View>
            </View>
            <OkPostText />
            <OkPostMedia />
            <View style={tw`w-full flex flex-col p-2 px-4`}>
                <OkPostReactions />
                <View style={tw`flex-row justify-around text-gray-400`}>
                    <Pressable style={tw`flex-row justify-center items-center bg-gray-200 rounded-full p-2 w-5/12`}>
                        <FontAwesomeIcon icon={faSmile} />
                        <Text style={tw`font-semibold text-sm mx-1`}>React</Text>
                    </Pressable>
                    <Pressable style={tw`flex-row justify-center items-center bg-gray-200 rounded-full p-2 w-5/12`}>
                        <FontAwesomeIcon icon={faComment} />
                        <Text style={tw`font-semibold text-sm mx-1`}>Comment</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    )
}
