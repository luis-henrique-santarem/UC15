import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { BottomTabsParamList, DrawerTabsParamList, StackParamList, TopTabsParamList } from './interface/NavigationInterfaces';
import AboutScreen from './screens/AboutScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';



// const Tab = createBottomTabNavigator<DrawerTabsParamList>();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator
//         screenOptions={({ route }) => ({
//           tabBarIcon: ({ color, size }) => {
//             let iconName;
//             if (route.name === 'Home') iconName = 'home-outline';
//             if (route.name === 'About') iconName = 'person-outline';
//             return <Ionicons name={iconName} size={size} color={color} />;
//           },
//           tabBarActiveTintColor: "blue", // Cor do ícone ativo
//           tabBarInactiveTintColor: "gray", // Cor do ícone ínativo
//           tabBarStyle: {height: 60}, // Altura da barra da aba
//           tabBarLabelStyle: {fontSize: 14}, // Tamanho do texto da aba
//         })}
//       >
//         <Tab.Screen name="Home" component={HomeScreen} />
//         <Tab.Screen name="About" component={AboutScreen} />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }

// const Stack = createNativeStackNavigator<StackParamList>();

//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Home">
//         <Stack.Screen name="Home" component={HomeScreen} />
//         <Stack.Screen name="Profile" component={ProfileScreen} />
//         <Stack.Screen name="About" component={AboutSreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );

// const Drawer = createDrawerNavigator<DrawerTabsParamList>();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Drawer.Navigator>
//         <Drawer.Screen name="Home" component={HomeScreen} />
//         <Drawer.Screen name="About" component={AboutScreen} />
//       </Drawer.Navigator>
//     </NavigationContainer>
//   );
// }


const TopTab = createMaterialTopTabNavigator<TopTabsParamList>();

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1}}>
             <NavigationContainer>
      <TopTab.Navigator
       screenOptions={{
        tabBarActiveTintColor: 'blue',
        tabBarInactiveTintColor: 'gray',
        tabBarLabelStyle: { fontSize: 14},
        tabBarStyle: { height: 60},
       }}
      >
        <TopTab.Screen name="Home" component={HomeScreen} />
        <TopTab.Screen name="About" component={AboutScreen} />
      </TopTab.Navigator>
    </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
   
  );
}