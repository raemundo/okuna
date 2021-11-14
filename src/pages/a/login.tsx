// import OKLoginPage from "~/screens/auth/pages/OKLoginPage";
import { View, Text, ImageBackground, Image } from "react-native";
import { t } from "~/lib/tailwind";
const image = {
  uri: "/emojis.png",
};

function LoginPage() {
  return (
    <View style={t`h-screen w-screen flex-row`}>
      <View style={t`w-6/12  p-32 text-center  bg-red-100`}>
        <Text style={t` leading-none pb-8 font-semibold  text-left text-5xl `}>
          Social networking, done good.
        </Text>
   
        <View style={t`flex-grow pb-8 items-center text-left `}>
          <Image
            style={t`w-6 h-6 mr-2 items-center inline-flex justify-center`}
            source={{ uri: "/home-login.svg" }}
          />
          <Text style={t`leading-none pl-4 font-semibold text-left text-2xl `}>
            Meet new friends and discover interests by joining or hosting
            communities.
          </Text>
        </View>
      </View>
      <View style={t`flex-1 w-screen`}>
        <ImageBackground
          source={image}
          style={t`w-full  h-6/12`}
          imageStyle={{
            resizeMode: "center",
          }}
        >
          <View style={t`items-center`}>fdf</View>
        </ImageBackground>
      </View>
    </View>
  );
}

export default LoginPage;
