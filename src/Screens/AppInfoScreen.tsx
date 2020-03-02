import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function AppInfoScreen() {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 50 }}>😊</Text>
      <Text style={{ color: "#2e7d32" }}>Download GitHub Link</Text>
      <Text style={{ fontSize: 50 }}>⤵️</Text>
      <Text style={{ color: "#2e7d32" }}>
        https://github.com/xhsynx/smart-contact
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center"
  }
});
