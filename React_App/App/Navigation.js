import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "./LoginScreen";
import HomeScreen from "./HomeScreen";
import CreateAccount from "./CreateAccount";
import BigSubject from "./BigSubject";
import VideoScreen from "./VideoScreen";
import PhotoScreen from "./PhotoScreen";
import SearchScreen from "./SearchScreen";
import ProfileScreen from "./ProfileScreen";

const Stack = createNativeStackNavigator();

export default function Navigation(props) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CreateAccount"
        component={CreateAccount}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="BigSubject"
        component={BigSubject}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="VideoScreen"
        component={VideoScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PhotoScreen"
        component={PhotoScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
