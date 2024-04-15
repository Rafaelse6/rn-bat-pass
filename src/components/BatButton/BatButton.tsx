import React from "react";
import { View, Text, Pressable } from "react-native";

import { styles } from "./BatButtonStyle";

export function BatButton() {
  return (
    <View>
      <Pressable onPress={() => console.log("CLICKED")} style={styles.button}>
        <Text style={styles.text}>GENERATE</Text>
      </Pressable>
      <Pressable onPress={() => console.log("CLICKED")} style={styles.button}>
        <Text style={styles.text}>🦇 COPY</Text>
      </Pressable>
    </View>
  );
}
