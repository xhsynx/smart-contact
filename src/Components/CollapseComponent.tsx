import React from "react";
import { StyleSheet, Text, Dimensions, View } from "react-native";
import User from "../Models/User";
import { Ionicons } from "@expo/vector-icons";
export default function CollapseComponent(props: any) {
  let user = props.value;
  return (
    <View style={[styles.container]}>
      <View
        style={{
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center"
        }}
      >
        <Text style={{ color: "white" }}>{user.phone}</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around"
        }}
      >
        <Ionicons name={"md-call"} size={24} color={"#2e7d32"} />
        <Ionicons name={"md-information-circle"} size={24} color={"#2e7d32"} />
        <Ionicons name={"md-create"} size={24} color={"#2e7d32"} />
        <Ionicons name={"md-trash"} size={24} color={"#2e7d32"} />
      </View>
    </View>
  );
}

const screenWidth = Math.round(Dimensions.get("window").width);
const screenHeight = Math.round(Dimensions.get("window").height);
const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flexDirection: "column",
    width: screenWidth,
    height: screenHeight / 10,
    borderWidth: 0.5,
    borderTopWidth: 0,
    borderColor: "#2e7d32",
    paddingTop: 0,
    marginTop: 0,
    justifyContent: "space-around"
  }
});
