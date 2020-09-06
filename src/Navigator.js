import React from "react";
import { StatusBar, SafeAreaView, Platform } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { getStatusBarHeight } from "react-native-status-bar-height";

import FirstScreen from "./FirstScreen";
import SecondScreen from "./SecondScreen";

import FirstIco from "./FirstIco";
import SecondIco from "./SecondIco";

const Tab = createBottomTabNavigator();
const statusBarHeight = getStatusBarHeight();

export default function Navigator({ navigation }) {
  React.useEffect(() => {
    navigation.setOptions({
      headerTitle: "Header",
      headerStyle: {
        backgroundColor: "#273142",
        shadowColor: "transparent",
        height: Platform.OS === "android" ? 70 : statusBarHeight + 70,
      },
    });
  }, [navigation]);

  return (
    <>
      <StatusBar backgroundColor="#273142" barStyle="light-content" />
      <SafeAreaView style={{ flex: 0, backgroundColor: "#273142" }}>
        <Tab.Navigator
          initialRouteName="FirstScreen"
          tabBarOptions={{
            activeTintColor: "#f27a1a",
            inactiveTintColor: "#6E7787",
            activeBackgroundColor: "#ffffff",
            inactiveBackgroundColor: "#ffffff",
            labelStyle: {
              fontWeight: "bold",
            },
            style: {
              elevation: 5,
              shadowColor: "#273142",
              shadowOffset: {
                width: 0,
                height: -4,
              },
              shadowRadius: 15,
              shadowOpacity: 0.1,
              borderColor: "#273142",
            },
          }}
        >
          <Tab.Screen
            name="FirstScreen"
            component={FirstScreen}
            options={{
              title: "FIRST",
              tabBarIcon: ({ focused }) => (
                <FirstIco color={focused ? "#f27a1a" : "#6E7787"} />
              ),
            }}
          />
          <Tab.Screen
            name="SecondScreen"
            component={SecondScreen}
            options={{
              title: "SECOND",
              tabBarIcon: ({ focused }) => (
                <SecondIco color={focused ? "#f27a1a" : "#6E7787"} />
              ),
            }}
          />
        </Tab.Navigator>
      </SafeAreaView>
    </>
  );
}

export default Navigator;
