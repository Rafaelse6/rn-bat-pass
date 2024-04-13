import React from "react";
import { Button, View } from "react-native";

import { styles } from "./BatButtonStyle";

export function BatButton() {
  return (
    <View style={styles.container}>
      <Button
        onPress={() => console.log("Hello")}
        title="Click here"
        accessibilityLabel="click on me"
        color="#831584"
      />
    </View>
  );
}
