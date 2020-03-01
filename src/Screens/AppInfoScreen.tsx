import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function AppInfoScreen() {
  return (
    <View style={styles.container}>
      <Text style={{ color: "#2e7d32" }}>App info screen</Text>
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
