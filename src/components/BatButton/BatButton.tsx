import React, { useState } from "react";
import { Text, Pressable } from "react-native";

import { styles } from "./BatButtonStyle";
import { BatTextInput } from "../BatTextInput/BatTextInput";
import generatePass from "../../services/passwordService";

export function BatButton() {
  const [pass, setPass] = useState("");

  function handleGenerateButton() {
    let generateToken = generatePass();
    setPass(generateToken);
  }

  return (
    <>
      <BatTextInput pass={pass} />
      <Pressable onPress={handleGenerateButton} style={styles.button}>
        <Text style={styles.text}>GENERATE</Text>
      </Pressable>
      <Pressable onPress={() => console.log("CLICKED")} style={styles.button}>
        <Text style={styles.text}>🦇 COPY</Text>
      </Pressable>
    </>
  );
}
