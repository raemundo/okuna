import React from "react";
import CreatePostBox from "./OKCreatePostBox";
import OKPost from "./OKPost";
import OKHeader from "./components/header/OkHeader";
import OKCreatePostBox from "./OKCreatePostBox";
import {
  View,
  Text,
  Image,
  TextInput,
  Pressable,
  ImageBackground,
} from "react-native";
import tw, { t } from "~/lib/tailwind";
import FontAwesomeIcon from "@/src/components/FontAwesomeIcon";
import {
  faBars,
  faCamera,
  faCog,
  faEllipsisH,
  faEllipsisV,
  faPen,
  faPlus,
  faSlidersH,
  faThLarge,
  faCoffee,
} from "@fortawesome/free-solid-svg-icons";

const ProfileScreen = () => {
  return (
    <View style={t`w-9/12 mx-auto mt-6 h-full  `}>
      <View
        style={t`w-full bg-red-500 shadow border border-gray-300 bg-white rounded-lg`}
      >
        <ImageBackground
          source={{ uri: "https://picsum.photos/720" }}
          imageStyle={t`rounded-t-2`}
          style={t`h-96 w-full rounded-t-4`}
        ></ImageBackground>
        <View style={t`w-auto flex-row items-center justify-between`}>
          <View style={t` flex-row justify-around mb-2 w-6/12 `}>
            <View style={t`flex-row items-center`}>
              <FontAwesomeIcon
                icon={faCoffee}
                size="2x"
                style={{ paddingRight: 10 }}
              />
              <View>
                <Text style={t`font-bold`}>Coffe</Text>
                <Text>c/coffee</Text>
              </View>
            </View>
            <View>
              <Text>Addicts</Text>
              <Text style={t`font-bold`}>210</Text>
            </View>
            <View>
              <Text>Addicts</Text>
              <Text style={t`font-bold	`}>210</Text>
            </View>
          </View>

          <View style={t`flex-row items-center my-6`}>
            <Pressable
              style={t`px-4 py-2 border border-transparent rounded-md flex-row rounded-20 bg-blue-800 text-white font-semibold focus:outline-none`}
            >
              Leave
            </Pressable>
            <Pressable
              style={(state) => [
                t`px-3 py-1.5 flex-row rounded-md font-semibold focus:outline-none`,
                state.hovered && t`bg-gray-200 rounded-full`,
              ]}
            >
              <FontAwesomeIcon icon={faEllipsisV} />
            </Pressable>
          </View>
        </View>
      </View>

      {/* After bio content */}
      <View style={t`h-full mt-2`}>
        <View style={t`flex-row flex-wrap`}>
          <View style={t`w-full md:w-2/6 px-2`}>
            <View
              style={t`bg-white rounded-lg p-3 text-sm text-gray-600 shadow border border-gray-300`}
            >
              <View style={t`mb-2 `}>
                <Text style={t`font-bold text-xl text-gray-800`}>Intro</Text>
              </View>
              <View style={t`flex flex-col space-y-3`}>
                <View style={t`flex items-center space-x-2`}>
                  <Text>{/* <i style={t`fas fa-briefcase`}></i> */}</Text>
                  <Text>
                    Full Stack Web Developer at{" "}
                    <Text style={t`font-semibold`}>Fiverr</Text>
                  </Text>
                </View>
                <View style={t`flex items-center space-x-2`}>
                  <Text>{/* <i style={t`fas fa-graduation-cap`}></i> */}</Text>
                  <Text>
                    Studiend B.Sc in SWE at{" "}
                    <Text style={t`font-semibold`}>
                      Daffodil International University
                    </Text>
                  </Text>
                </View>
                <View style={t`flex items-center space-x-2`}>
                  <Text>{/* <i style={t`fas fa-home`}></i> */}</Text>
                  <Text>
                    Lives in <Text style={t`font-semibold`}>Dhaka</Text>
                  </Text>
                </View>
                <View style={t`flex items-center space-x-2`}>
                  <Text>{/* <i style={t`fas fa-map-marker-alt`}></i> */}</Text>
                  <Text>
                    From{" "}
                    <Text style={t`font-semibold`}>
                      Chandpur, Chittagong, Bangladesh
                    </Text>
                  </Text>
                </View>
                <View style={t`flex items-center space-x-2`}>
                  <Text>{/* <i style={t`fas fa-heart`}></i> */}</Text>
                  <Text>
                    <Text style={t`font-semibold`}>Single</Text>
                  </Text>
                </View>
                <View style={t`flex items-center space-x-2`}>
                  <Text>{/* <i style={t`fab fa-facebook`}></i> */}</Text>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={"https://facebook.com/saifulshihab"}
                  >
                    <Text>saifulshihab</Text>
                  </a>
                </View>
                <View style={t`flex items-center space-x-2`}>
                  <Text>{/* <i style={t`fab fa-instagram`}></i> */}</Text>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={"https://instagram.com/_shiha6"}
                  >
                    <Text>_shiha6</Text>
                  </a>
                </View>
                <View style={t`flex items-center space-x-2`}>
                  <Text>{/* <i style={t`fab fa-twitter`}></i> */}</Text>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={"https://twitter.com/ShihabSWE"}
                  >
                    <Text>ShihabSWE</Text>
                  </a>
                </View>
                <View style={t`flex items-center space-x-2`}>
                  <Text>{/* <i style={t`fab fa-github`}></i> */}</Text>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={"https://github.com/saifulshihab"}
                  >
                    <Text>saifulshihab</Text>
                  </a>
                </View>
                <View style={t`flex items-center space-x-2`}>
                  <Text>{/* <i style={t`fab fa-behance`}></i> */}</Text>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={"https://www.behance.net/saifulis1am"}
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

            <View
              style={t`bg-white rounded-md shadow border border-gray-300 p-2 mt-4 px-3`}
            >
              <View
                style={t`flex-row items-center justify-between pb-2 border-b`}
              >
                <View>
                  <Text style={t`text-xl text-gray-700 font-bold`}>Posts</Text>
                </View>
                <View style={t`flex-row items-center space-x-2`}>
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
                  style={t`flex-row font-semibold flex-1 h-8 focus:outline-none focus:bg-gray-200 justify-center space-x-2 hover:bg-gray-100 rounded-md`}
                >
                  <FontAwesomeIcon icon={faBars} />
                  List View
                </Pressable>
                <Pressable
                  style={t`flex-row font-semibold flex-1 h-8 focus:outline-none focus:bg-gray-200 justify-center space-x-2 hover:bg-gray-100 rounded-md`}
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

export default ProfileScreen;
