import { View, Text, Image, Pressable } from 'react-native'
import FontAwesomeIcon from "~/component-lib/FontAwesomeIcon";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import twi, { tw } from "~/lib/tailwind"
import Card from "~/component-lib/Card"
import OkPostHeader from "~/components/OkPost/components/OkPostHeader";
import OkPostText from "~/components/OkPost/components/OkPostText";
import OkPostMedia from "~/components/OkPost/components/OkPostMedia";
import OkPostLinkPreview from "~/components/OkPost/components/OkPostLinkPreview";
import OkPostReactions from "~/components/OkPost/components/OkPostReactions";
import OkPostCommentCounts from "~/components/OkPost/components/OkPostCommentCounts";
import OkPostActions from "~/components/OkPost/components/OkPostActions";
import OkPostCircles from '~/components/OkPost/components/OkPostCircles';
import { useTranslation } from 'react-i18next';

export default function OkPost() {
    return (
        <Card style={tw`md:rounded-lg`}>
            <View style={tw`flex-row justify-between items-center m-3`}>
                <View style={tw`flex-row`}>
                    <Image
                        source={{ uri: "https://picsum.photos/200" }}
                        style={tw`w-10 h-10 rounded-lg`}
                    />
                    <View style={tw`mx-2`}>
                        <Text style={tw`font-semibold text-gray-500 dark:text-white`}>Saiful Islam</Text>
                        <View style={tw`flex-row`}>
                            <Text style={tw`text-xs font-bold text-gray-700`}>@saiful</Text>
                            <Text style={tw`mx-2 text-xs text-gray-300`}>2d</Text>
                        </View>
                    </View>
                </View>
                <Pressable style={tw`text-gray-800 rounded-full hover:bg-gray-100 focus:outline-none`}>
                    <FontAwesomeIcon icon={faEllipsisV} />
                </Pressable>
            </View>
            <OkPostText />
            <OkPostMedia />
            <OkPostReactions />
            <OkPostActions />
        </Card>
    )
}
