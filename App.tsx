import React, { useRef } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import * as Analytics from "expo-firebase-analytics";
import tw, { useDeviceContext } from "~/lib/tailwind";

import "~/lib/i18n";
import Home from "~/screens";

const Tab = createStackNavigator();
// const Tab = createBottomTabNavigator();

const navigationRef = React.createRef();

function navigate(name, params) {
  navigationRef.current && navigationRef.current.navigate(name, params);
}


export default function App() {
  useDeviceContext(tw);
  const routeNameRef = useRef();
  return (
    <NavigationContainer
      // @ts-ignore
      ref={navigationRef}
      onReady={() =>
        (routeNameRef.current = navigationRef.current.getCurrentRoute().name)
      }
      onStateChange={async () => {
        const previousRouteName = routeNameRef.current;
        const currentRouteName = navigationRef.current.getCurrentRoute().name;

        if (previousRouteName !== currentRouteName) {
          // The line below uses the expo-firebase-analytics tracker
          // https://docs.expo.io/versions/latest/sdk/firebase-analytics/
          // Change this line to use another Mobile analytics SDK
          // await Analytics.setCurrentScreen(currentRouteName);
        }

        // Save the current route name for later comparison
        routeNameRef.current = currentRouteName;
      }}
    >
      <Tab.Navigator initialRouteName="home">
        <Tab.Screen name="home">
          {(props) => (<Home {...props} />)}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
