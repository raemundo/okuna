import React from "react";
import CreatePostBox from "~/components/OKCreatePostBox";
import OKPost from "~/components/OKPost";
import {
  View,
  Text,
  Pressable,
} from "react-native";
import tw, { t } from "~/lib/tailwind";
import FontAwesomeIcon from "@/src/components/FontAwesomeIcon";
import {
  faBars,
  faCog,
  faSlidersH,
  faThLarge,
  faGlobeAmericas,
} from "@fortawesome/free-solid-svg-icons";
import OkDesktopCommunityProfile from "./components/desktop-community-profile/OkDesktopCommunityProfile"
const OkCommunityProfile = () => {
  return (


    <View style={t`w-9/12 mx-auto mt-6 h-full`}>
      <OkDesktopCommunityProfile />


      {/* After bio content */}
      <View style={t`h-full mt-2`}>
        <View style={t`flex-row flex-wrap`}>
          <View style={t`w-full md:w-2/6 mt-1`}>
            <View
              style={t`bg-white rounded-lg p-3 shadow border border-gray-300`}
            >
              <View style={t`mb-2 `}>
                <Text style={t`font-bold text-sm text-gray-400`}>About</Text>
              </View>
              <View style={t`flex flex-col`}>
                <Text>
                  A place for coffee enthusiast. Third wave and specialty coffee, brewing methods, roasting, cool, places, equipments, culture.
                </Text>
                <View style={t`flex-row`}><FontAwesomeIcon icon={faGlobeAmericas} style={tw`px-2 text-gray-500`} /> <Text style={t`text-gray-500`}>Public</Text></View>
                <View style={t`flex-row`}>
                  <Text style={t`bg-yellow-500 py-1 px-2 mx-1 rounded-xl`}>food</Text>
                  <Text style={t`bg-yellow-500 py-1 px-2 mx-1 rounded-xl`}>food</Text>
                </View>
              </View>
            </View>
          </View>

          <View style={t`w-full md:w-4/6 mt-1 md:pl-2`}>
            <CreatePostBox />

            {/* post filter box */}

            <View
              style={t`bg-white rounded-md shadow border border-gray-300 p-2 px-3`}
            >
              <View
                style={t`flex-row items-center justify-between pb-2 border-b`}
              >
                <View>
                  <Text style={t`text-xl text-gray-700 font-bold`}>Posts</Text>
                </View>
                <View style={t`flex-row items-center`}>
                  <Pressable
                    style={t`flex-row px-3 py-1.5 bg-gray-200 hover:bg-gray-300 rounded-md font-semibold focus:outline-none`}
                  >
                    <FontAwesomeIcon icon={faSlidersH} />
                    Filters
                  </Pressable>
                  <Pressable
                    style={t`flex-row px-3 py-1.5 bg-gray-200 hover:bg-gray-300 rounded-md font-semibold focus:outline-none`}
                  >
                    <FontAwesomeIcon icon={faCog} />
                    Manage Posts
                  </Pressable>
                </View>
              </View>
              <View style={t`flex-row space-x-3 text-gray-500 mt-1`}>
                <Pressable
                  style={t`flex-row font-semibold flex-1 h-8 focus:outline-none focus:bg-gray-200 justify-center hover:bg-gray-100 rounded-md`}
                >
                  <FontAwesomeIcon icon={faBars} />
                  List View
                </Pressable>
                <Pressable
                  style={t`flex-row font-semibold flex-1 h-8 focus:outline-none focus:bg-gray-200 justify-center hover:bg-gray-100 rounded-md`}
                >
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

export default OkCommunityProfile;
