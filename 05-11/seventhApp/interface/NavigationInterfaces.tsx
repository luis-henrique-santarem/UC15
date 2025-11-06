import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { MaterialTopTabNavigationProp } from "@react-navigation/material-top-tabs";
import { ParamListBase, RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export interface StackParamList extends ParamListBase {
    Home: undefined;
    Profile: { userId: number }
    About: undefined;
}

export interface ParamList extends ParamListBase {
    Home: undefined;
    Profile: { userId: number }
    About: undefined;
}



export interface HomeScreenProps {
     navigation: NativeStackNavigationProp<StackParamList, 'Home'>;
}

export interface ProfileScreenProps {
    navigation: NativeStackNavigationProp<StackParamList, 'Profile'>;
    route: RouteProp<StackParamList, "Profile">
}


export interface BottomTabsParamList extends ParamListBase {
    Home: undefined,
    About: undefined
}

export interface HomeScreenPropBottom {
    navigation: BottomTabNavigationProp<BottomTabsParamList, 'Home'>;
}

export interface AboutScreenProps {
    navigation: BottomTabNavigationProp<BottomTabsParamList, 'About'>;
}

export interface DrawerTabsParamList extends ParamListBase {
    Home: undefined,
    About: undefined
}

export interface HomeScreenPropDrawer {
    navigation: BottomTabNavigationProp<DrawerTabsParamList, 'Home'>;
}

export interface AboutScreenDrawer {
    navigation: BottomTabNavigationProp<DrawerTabsParamList, 'About'>;
}

export interface TopTabsParamList extends ParamListBase {
    Home: undefined,
    About: undefined
}

export interface HomeScreenPropsTop {
    navigation: MaterialTopTabNavigationProp<TopTabsParamList, 'Home'>;
}

export interface AboutScreenPropsTop {
    navigation: MaterialTopTabNavigationProp<TopTabsParamList, 'About'>;
}