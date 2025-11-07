import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { ParamListBase, RouteProp } from "@react-navigation/native";


export interface BottomTabsParamList extends ParamListBase {
  Home: undefined;  
  Soma: undefined;
  Subtracao: undefined;
  Multiplicacao: undefined;
  Divisao: undefined;
}

export interface HomeScreenProps {
  navigation: BottomTabNavigationProp<BottomTabsParamList, "Home">;
  route: RouteProp<BottomTabsParamList, "Home">;
}

export interface SomaScreenProps {
  navigation: BottomTabNavigationProp<BottomTabsParamList, "Soma">;
  route: RouteProp<BottomTabsParamList, "Soma">;
}

export interface SubScreenProps {
  navigation: BottomTabNavigationProp<BottomTabsParamList, "Subtracao">;
  route: RouteProp<BottomTabsParamList, "Subtracao">;
}

export interface MulScreenProps {
  navigation: BottomTabNavigationProp<BottomTabsParamList, "Multiplicacao">;
  route: RouteProp<BottomTabsParamList, "Multiplicacao">;
}

export interface DivScreenProps {
  navigation: BottomTabNavigationProp<BottomTabsParamList, "Divisao">;
  route: RouteProp<BottomTabsParamList, "Divisao">;
}

