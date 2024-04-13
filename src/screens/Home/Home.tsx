import React from "react";
import { Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import styles from "./Style";
import { BatLogo } from "../../components/BatLogo/BatLogo";
import { BatTextInput } from "../../components/BatTextInput/BatTextInput";

export default function Home() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.logoContainer}>
        <BatLogo />
      </View>

      <View>
        <BatTextInput />
      </View>

      <Text>Home works!!!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
