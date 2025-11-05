import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ProfileScreenProps } from "../interface/NavigationInterfaces";

export default function ProfileScreen({ navigation,  route }: ProfileScreenProps) {
  const { userId } = route.params;

  return (
    <View style={styles.container}>

      <Text style={styles.text}>ProfileScreen do Usuario de ID: {userId}</Text>

      <Button
        title="Voltar para Home" 
        onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "red",
    fontSize: 23,
    fontWeight: "semibold",
  },
});
