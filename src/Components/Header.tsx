import React from "react";
import { StyleSheet, Text, Dimensions, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
export default function HeaderComponent(props: any) {
  return (
    <View style={styles.container}>
      <Text style={{ fontWeight: "bold", fontSize: 30, color: "#2e7d32" }}>
        {props.value}
      </Text>
      <Ionicons name={"md-call"} size={40} color={"#2e7d32"} />
    </View>
  );
}

const screenHeight = Math.round(Dimensions.get("window").height);
const styles = StyleSheet.create({
  container: {
    flex: 0.25,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center"
  }
});
