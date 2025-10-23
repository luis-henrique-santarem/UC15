import React, { useState } from "react";
import { FlatList, Text, View, StyleSheet } from "react-native";

export default function exemploFlatList() {

 const dados = ["Leonardo", "Luut", "Pedro", "Guilherme"];

  return (
     <View style={{ flex: 1, padding: 20 }}>
      <FlatList
        data={dados} 
        keyExtractor={(index) => index.toString()} 
        renderItem={({ item }) => <Text>{item}</Text>} 
      />
    </View>
  )
}

const styles = StyleSheet.create({})