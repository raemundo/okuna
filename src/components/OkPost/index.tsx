import { View, Text, Image, Pressable } from 'react-native'
import FontAwesomeIcon from "~/component-lib/FontAwesomeIcon";
import { faComment, faEllipsisV, faSmile } from "@fortawesome/free-solid-svg-icons";
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

export default function OKPost() {
    const { t } = useTranslation()
    return (
        <Card style={tw`md:rounded-lg`}>
            <View style={tw`flex-row items-center p-3 px-4`}>
                <View style={tw`w-10 h-10 mx-2`}>
                    <Image
                        source={{ uri: "https://picsum.photos/200" }}
                        style={tw`w-full h-full rounded-lg`}
                    />
                </View>
                <View style={tw`flex flex-col flex-grow`}>
                    <Text style={tw`font-semibold text-gray-500 dark:text-white`}>Saiful Islam</Text>
                    <View style={tw`flex-row`}>
                        <Text style={tw`text-xs font-bold text-gray-700`}>@saiful</Text>
                        <Text style={tw`mx-2 text-xs text-gray-300`}>2d</Text>
                    </View>
                </View>
                <View style={tw`w-8 h-8`}>
                    <Pressable style={tw`w-full h-full text-gray-800 rounded-full hover:bg-gray-100 focus:outline-none`}>
                        <FontAwesomeIcon icon={faEllipsisV} />
                    </Pressable>
                </View>
            </View>
            <OkPostText />
            <OkPostMedia />
            <View style={tw`flex flex-col w-full p-2 px-4`}>
                <OkPostReactions />
                <View style={tw`flex-row justify-around text-gray-400`}>
                    <Pressable style={tw`flex-row items-center justify-center w-5/12 p-2 bg-gray-200 dark:bg-gray-900 rounded-full`}>
                        <FontAwesomeIcon icon={faSmile} style={twi`dark:text-white`} />
                        <Text style={tw`mx-1 text-sm font-semibold dark:text-white`}>{t('post__action_react')}</Text>
                    </Pressable>
                    <Pressable style={tw`flex-row items-center justify-center w-5/12 p-2 bg-gray-200 dark:bg-gray-900 rounded-full`}>
                        <FontAwesomeIcon icon={faComment} style={twi`dark:text-white`} />
                        <Text style={tw`mx-1 text-sm font-semibold dark:text-white`}>{t('post__action_comment')}</Text>
                    </Pressable>
                </View>
            </View>
        </Card>
    )
}
