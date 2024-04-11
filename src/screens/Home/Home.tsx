import React from "react";
import { Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import styles from "./Style";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text>Home works!!!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
