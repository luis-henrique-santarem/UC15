import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import HomeScreen from "./Screen/HomeScree";
import SomaScreen from "./Screen/SomaScreen";
import SubScreen from "./Screen/SubScreen";
import MulScreen from "./Screen/MulScreen";
import DivScreen from "./Screen/DivScreen";
import { BottomTabsParamList } from "./Interface/Interfaces";

const Tab = createBottomTabNavigator<BottomTabsParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size, focused }) => {
            let iconName: any
            if (route.name === "Home") iconName = "home-outline";
            if (route.name === "Soma") iconName = "add-circle-outline";
            if (route.name === "Subtracao") iconName = "remove-circle-outline";
            if (route.name === "Multiplicacao") iconName = "close-circle-outline";
            if (route.name === "Divisao") iconName = "ellipse-outline";
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "#ff7a00",
          tabBarInactiveTintColor: "#999",
          headerTitleAlign: "center",
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Soma" component={SomaScreen} />
        <Tab.Screen name="Subtracao" component={SubScreen} />
        <Tab.Screen name="Multiplicacao" component={MulScreen} />
        <Tab.Screen name="Divisao" component={DivScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
